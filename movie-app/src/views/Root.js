import React from 'react';
import Mainpage from 'components/Mainpage/Main/Mainpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mindhunter from './Mindhunter';
import Sherlock from './Sherlock';
import Breakingbad from './Breakingbad';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/mindhunter">
          <Mindhunter />
        </Route>
        <Route path="/sherlock">
          <Sherlock />
        </Route>
        <Route path="/breakingbad">
          <Breakingbad />
        </Route>
        <Route path="/">
          <Mainpage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
