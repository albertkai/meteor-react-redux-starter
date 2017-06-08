import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { MainLayout, Home } from '/imports/core';

export const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
    </Route>
  </Router>
);

export default AppRouter;
