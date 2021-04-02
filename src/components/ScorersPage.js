/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
        <div className="scorers-page">
            {getScorer.map((scorer) =>
            <ul key={uuid()}>
                <li>{scorer.playerName}</li>
                <li>{scorer.club}</li>
                <li>{scorer.goals}</li>
            </ul>
            )}
        </div>
    );
};

export default ScorersPage;