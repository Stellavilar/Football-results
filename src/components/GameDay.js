/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from 'react';
import axios from 'axios';

function GameDay() {
    
    //Get league name thanks to url
    const url_string = window.location.href
    const league = url_string.slice(url_string.lastIndexOf('/') + 1);
    //Get game day number thanks to url
    const gameDay = url_string.substring(
        url_string.lastIndexOf("journee/") + 8,
        url_string.lastIndexOf("/league")
    );

    //Get game day
    const [ getGameDay, setGetGameDay ] = useState ([]);
    //Get calendar
    const getCalendar = () => {
        axios.get(`calendrier/${league}`)
            .then((res) => {
                if(gameDay === "31"){
                    setGetGameDay(res.data.day31[0])
                }
            })
            .catch((err) => {
                console.log(err)
            })
    };
    console.log(getGameDay)

    useEffect(() => {getCalendar()}, [])
    
    return (
        <div className="game-day">
            Journée
        </div>
    )
};

export default GameDay;