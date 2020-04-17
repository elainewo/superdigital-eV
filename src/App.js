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
import UeberUns from "./Components/UeberUns";
import UeberUnsItem from "./Components/UeberUnsItem";
import { Container } from 'react-bootstrap'

const routes = [
  { path: '/', name: 'Home', Component: UeberUns },
  { path: '/ueberunsitem', name: 'UeberUns', Component: UeberUnsItem }
]


function App() {
  return (
    <div className="App">





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
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>

    </div>
  );
}
export default App;
