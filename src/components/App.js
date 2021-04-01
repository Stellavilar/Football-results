import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import '../styles/index.scss';

import Header from './Header';
import Homepage from './Homepage';
import Ligue1 from './ligue1/Ligue1Classement';

function App() {

  //GET LIGUE 1 CLASSEMENT WITH RAPIDAPI DATA:
  const [ classement, setClassement ] = useState([]);
  const getFrenchRanking = () => {
    axios.get('https://tdyu6gkdd7.execute-api.us-east-1.amazonaws.com/production/classement/ligue1')
    .then((res) => {
      if (res.error) throw new Error(res.error);
      setClassement(res.data.records);
    })
    .catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {getFrenchRanking()}, []);


  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <Homepage />
      </Route>
      <Route exact path="/classement/ligue1/">
        <Header />
        <Ligue1 classement={classement}/>
      </Route>
    </div>
  );
}

export default App;
