import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Partner from '../pages/Partner';
import Topic01 from '../pages/Topic01';
//import Topic02 from '../pages/Topic02';
import Topic03 from '../pages/Topic03';
import Topic04 from '../pages/Topic04';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/topic01" component={Topic01} />

      <Route path="/topic03" component={Topic03} />
      <Route path="/topic04" component={Topic04} />
      <Route path="/partner" component={Partner} />
    </Switch>
  );
}
