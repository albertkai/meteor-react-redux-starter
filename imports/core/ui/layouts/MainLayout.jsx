import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export class MainLayout extends PureComponent {

  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Router history={this.props.history}>
        <div id="main-layout">
          <Switch>
            <Route path="/" render={props => <Home {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainLayout;
