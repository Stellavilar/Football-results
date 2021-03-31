import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import env from "react-dotenv";
import axios from 'axios';
import '../styles/index.scss';

import Header from './Header';
import Homepage from './Homepage';
import Ligue1 from './ligue1/Ligue1Classement';

function App() {
  //GET LIGUE 1 CLASSEMENT WITH RAPIDAPI DATA:
  const [ classement, setClassement ] = useState([]);
  const getFrenchRanking = () => {
    axios.get('https://heisenbug-ligue-1-live-scores-v1.p.rapidapi.com/api/ligue1/table', {
      headers: {
        "x-rapidapi-key": env.RAPID_API_KEY,
	      "x-rapidapi-host": env.RAPID_API_HOST,
	      "useQueryString": true
      }
    })
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
        <Ligue1 classement={classement} />
      </Route>
    </div>
  );
}

export default App;
