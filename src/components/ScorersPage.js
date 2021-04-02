/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function ScorersPage() {

    const titles = useSelector(state => state );
    const getScorers = () => {
        const league = titles.title
        axios.get(`buteurs/${league}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err)=> {
                console.log(err)
            } )
    };
    useEffect(() => {getScorers()}, []);

    return (
        <div className="scorers-page">
            {titles.title}
        </div>
    );
};

export default ScorersPage;