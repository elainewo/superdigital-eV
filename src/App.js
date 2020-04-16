import React from 'react';
import Wirkung from './Wirkungs';
import Spenden from './Spenden';
import React from "react";
import Header from "./Components/Header";
import Beiträge from "./Components/Beiträge";
import DetailBeitrag from "./Components/DetailBeitrag";
import { Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DigitalZukunft from "./Components/DigitalZukunft";
import "./Components/app.css";
import UeberUns from "./Components/UeberUns";
import UeberUnsItem from "./Components/UeberUnsItem";

function App() {
  return(
    <div className="App">
      <Wirkung />
      <Spenden />
     
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
                  <Header />
                  <Beiträge />
                  <DigitalZukunft />
                  <UeberUns />
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
}
export default App;