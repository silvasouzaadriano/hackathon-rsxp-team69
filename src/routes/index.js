import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Partner from '../pages/Partner';
import Topic from '../pages/Topic';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/topic" component={Topic} />
      <Route path="/partner" component={Partner} />
    </Switch>
  );
}
