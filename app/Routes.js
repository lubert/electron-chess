import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import GameWindow from './containers/GameWindow';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={GameWindow} />
    </Switch>
  </App>
);
