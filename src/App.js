import Wirkung from "./Wirkungs";
import Spenden from "./Spenden";
import React, { Component } from "react";
import Header from "./Components/Header";
import Beiträge from "./Components/Beiträge";
import DetailBeitrag from "./Components/DetailBeitrag";
import { Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DigitalZukunft from "./Components/DigitalZukunft";
import "./Components/app.css";
import Chancen from "./Components/Chancen";
import UeberUns from "./Components/UeberUns";
import UeberUnsItem from "./Components/UeberUnsItem";
import Home from "./Components/Home";
import SideDrawer from "./Components/SideDrawer";
import Backdrop from "./Components/Backdrop";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/ueberunsitem", name: "UeberUns", Component: UeberUnsItem },
];

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleHandler = () => {
    this.setState((pervState) => {
      return { sideDrawerOpen: !pervState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        {/* ******* UeberUns mit Transition Group ****** */}

        <Switch>
          <div className="container">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Header drawerClickHandler={this.drawerToggleHandler} />
                      <SideDrawer show={this.state.sideDrawerOpen} />
                      {backdrop}
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
            <Route path='/ueberunsitem'>
              <UeberUnsItem />
            </Route>
            <Route
              path="/:id"
              exact
              render={(props) => <DetailBeitrag {...props} />}
            ></Route>
          </div>
        </Switch>

        {/* <Switch>
        <Route path='/' exact>
          <Header />
          <Chancen />
          <DigitalZukunft />
          <Wirkung />
          <Beiträge />
          <UeberUns />
          <Spenden />
        </Route>
        <Route path='/ueberunsitem'>
          <UeberUnsItem />
        </Route>
        <Route
          path="/:id"
          exact
          render={(props) => <DetailBeitrag {...props} />}
        ></Route>
      </Switch> 
} */}
      </div>
    );
  }
}
export default App;

// import { Container } from 'react-bootstrap';

{
  /* <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                <Switch location={location}>
                  <Route path="/" exact>
                    <Header drawerClickHandler={this.drawerToggleHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <Chancen />
                    <DigitalZukunft />
                    <Wirkung />
                    <Beiträge />
                    <UeberUns />
                    <Spenden />
                  </Route>
                  <Route
                    path="/:id"
                    exact
                    render={(props) => <DetailBeitrag {...props} />}
                  ></Route>
                  <Route path="/ueberunsitem" exact>
                    <UeberUnsItem />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  } */
}
