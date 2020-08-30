import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login } from '../containers/pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      {/* <Route path="/ops" component={NotFound} /> */}
      {/* <Route path="*">
          <Redirect to={{
            pathname: '/ops',
            state: { referrer: window && window.location.href, message: '404' }
          }}
          />
        </Route> */}
    </Switch>
  );
};

export default Routes;
