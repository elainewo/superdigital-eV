import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import DigitalZukunft from './Components/DigitalZukunft';
import './Components/app.css';
import UeberUns from './Components/UeberUns';
import UeberUnsItem from './Components/UeberUnsItem';


function App() {
  return (
    <div className="App">
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Switch location={location}>
              <Route path='/' exact>
                {/* <DigitalZukunft /> */}
                <UeberUns />
              </Route>
              <Route path='/ueberunsitem' exact>
                <UeberUnsItem />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>

      )} />
    </div>
  );
}

export default App;
