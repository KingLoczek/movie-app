import React from 'react';
import Mainpage from 'components/Mainpage/Main/Mainpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Series from 'data/Series';
import Mindhunter from './Mindhunter';
import Sherlock from './Sherlock';

const Root = () => {
  return (
    <Router>
      <Switch>
        {/*{Series.map((Series) => (*/}
        {/*  <React.Fragment key={Series.id}>*/}
        {/*    <Route path={Series.pathname}>*/}
        {/*      <Series.Component data={Series.data} />*/}
        {/*    </Route>*/}
        {/*  </React.Fragment>*/}
        ))}
        <Route path="/" exact>
          <Mainpage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
