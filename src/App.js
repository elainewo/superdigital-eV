import Wirkung from "./Wirkungs";
import Spenden from "./Spenden";
import React from "react";
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
import { Container } from 'react-bootstrap';
import Home from './Components/Home';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/ueberunsitem', name: 'UeberUns', Component: UeberUnsItem }
]

function App() {
  return (
    <div className="App">

      {/* ******* UeberUns mit Transition Group ****** */}

      <Switch>

        <Container className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={2000}
                  classNames="page"
                  unmountOnExit
                >

                  <div className="page">
                    <Header />
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Route
            path="/:id"
            exact
            render={(props) => <DetailBeitrag {...props} />}
          ></Route>
        </Container>



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
      </Switch> */}
    </div >
  );
}
export default App;
