import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/index.scss';

import Header from './Header';
import Homepage from './Homepage';
import Ligue1 from './ligue1/Ligue1Classement';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <Homepage />
      </Route>
      <Route exact path="/classement/ligue1/">
        <Header />
        <Ligue1 />
      </Route>
    </div>
  );
}

export default App;
