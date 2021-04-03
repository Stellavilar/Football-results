/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import axios from 'axios';


function ScorersPage() {

    const [ getScorer, setGetScorer ] = useState([])

    const titles = useSelector(state => state );
    const getScorers = () => {
        const league = titles.title
        axios.get(`buteurs/${league}`)
            .then((res) => {
                setGetScorer(res.data.scorers)
            })
            .catch((err)=> {
                console.log(err)
            } )
    };
    useEffect(() => {getScorers()}, []);

    return (
        <div className="grid">
            <Typography variant="h3">Meilleurs buteurs</Typography>
            <div className="table-head">
                    <div className="logo"></div>
                    <div className="club">Nom</div>
                    <div className="club">Club</div>
                    <div className="club">Buts</div>
                    <div className="penalty-head">Penalties</div>
            </div>
            {getScorer.map((scorer) => 
            <div className="table-rows" key={uuid()}>
                <div className="number-row">{scorer.number}</div>
                <div className="club-row">{scorer.playerName}</div>
                <div className="club-row">{scorer.club}</div>
                <div className="result-row">{scorer.goals}</div>
                <div className="result-row">{scorer.penalties}</div>
            </div>
            )}
        </div>
    );
};

export default ScorersPage;