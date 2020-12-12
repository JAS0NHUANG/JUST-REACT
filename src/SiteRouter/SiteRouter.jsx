import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import T0D0 from '../T0D0';
import Gomoku from '../Gomoku';
// import Form from '../Form';

function SiteRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/T0D0">
          <T0D0 />
        </Route>
        <Route path="/Gomoku">
          <Gomoku />
        </Route>
      </Switch>
    </Router>
  )
}

export default SiteRouter;
