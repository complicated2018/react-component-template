import routes from '@/router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <>
      <Switch>
        {routes.map((route: { [key: string]: any }) => (
          <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default App;
