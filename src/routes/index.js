import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Partner from '../pages/Partner';
import Topic03 from '../pages/Topic03';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/topic03" component={Topic03} />
      <Route path="/partner" component={Partner} />
    </Switch>
  );
}
