import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LayoutPage from './containers/LayoutPage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/layout" component={LayoutPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
