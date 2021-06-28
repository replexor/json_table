import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Main from '@pages/Main/Main';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
