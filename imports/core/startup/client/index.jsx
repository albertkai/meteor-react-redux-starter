import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { MainLayout } from '../../ui/layouts/MainLayout';
import { store } from '../../api/redux/store';
import { history } from './history';

// Import methods for optimistic UI here

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <MainLayout history={history} />
    </Provider>,
    document.getElementById('app'),
  );
});
