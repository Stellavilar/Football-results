/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import '../styles/index.scss';
//Import components
import Header from './Header';
import Homepage from './Homepage';
import Ligue1 from './classement/Ligue1';
import PremierLeague from './classement/PremierLeague';
import Liga from './classement/Liga';
import SerieA from './classement/SerieA';
import Bundesliga from './classement/Bundesliga';
import Calendar from './Calendar';
import GameDay from './GameDay';

function App() {

  //Get Ligue 1 ranking with API gateway:
  const [ classement, setClassement ] = useState([]);
  const getFrenchRanking = () => {
    axios.get('classement/ligue1')
      .then((res) => {
        if (res.error) throw new Error(res.error);
        setClassement(res.data.records);
      })
      .catch((err) => {
        console.log(err)
      })
  };
   //Get Premier League ranking with API gateway:
   const [ ranking, setRanking ] = useState([]);
   const getEnglishRanking = () => {
     axios.get('classement/premierleague')
       .then((res) => {
         if (res.error) throw new Error(res.error);
         setRanking(res.data.records);
       })
       .catch((err) => {
         console.log(err)
       })
   };
   //Get Liga ranking with API gateway:
   const [ spanishRanking, setSpanishRanking ] = useState([]);
   const getSpanishRanking = () => {
     axios.get('classement/liga')
       .then((res) => {
         if (res.error) throw new Error(res.error);
         setSpanishRanking(res.data.records);
       })
       .catch((err) => {
         console.log(err)
       })
   };
   //Get Liga ranking with API gateway:
   const [ italianRanking, setItalianRanking ] = useState([]);
   const getItalianRanking = () => {
     axios.get('classement/seriea')
       .then((res) => {
         if (res.error) throw new Error(res.error);
         setItalianRanking(res.data.records);
       })
       .catch((err) => {
         console.log(err)
       })
   };
   //Get Liga ranking with API gateway:
   const [ germanRanking, setGermanRanking ] = useState([]);
   const getGermanRanking = () => {
     axios.get('classement/bundesliga')
       .then((res) => {
         if (res.error) throw new Error(res.error);
         setGermanRanking(res.data.records);
       })
       .catch((err) => {
         console.log(err)
       })
   };
 
  useEffect(() => {getFrenchRanking()}, []);
  useEffect(() => {getEnglishRanking()}, []);
  useEffect(() => {getSpanishRanking()}, []);
  useEffect(() => {getItalianRanking()}, []);
  useEffect(() => {getGermanRanking()}, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Homepage />
        </Route>
        <Route exact path="/ligue1">
          <Header />
          <Ligue1 classement={classement}/>
        </Route>
        <Route exact path="/premierleague">
          <Header />
          <PremierLeague ranking={ranking}/>
        </Route>
        <Route exact path="/liga">
          <Header />
          <Liga spanishRanking={spanishRanking}/>
        </Route>
        <Route exact path="/seriea">
          <Header />
          <SerieA italianRanking={italianRanking}/>
        </Route>
        <Route exact path="/bundesliga">
          <Header />
          <Bundesliga germanRanking={germanRanking}/>
        </Route>
        <Route exact path="/calendrier/:ligue">
          <Header />
          <Calendar/>
        </Route>
        <Route exact path="/journee/:numero/league/:ligue">
          <Header />
          <Calendar/>
          <GameDay/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
