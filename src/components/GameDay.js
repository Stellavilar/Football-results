/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        textAlign: "center",
        marginBottom: "5%",
        color: "#024BAE"
    },
    datePart: {
        alignSelf: "center"
    },
    date: {
        fontWeight: "bold",
        fontSize: "1.5em"
    },
    hour: {
        textAlign: "center",
        fontWeight: "bold",
        color: "grey"
    },
    scorePart: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    score: {
        fontWeight: "bold"
    }
});

function GameDay() {
    const classes = useStyles();
    
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
                switch(gameDay) {
                    case '31':
                        setGetGameDay(res.data.day31);
                    break;
                    case '32':
                        setGetGameDay(res.data.day32);
                    break;
                    case '33':
                        setGetGameDay(res.data.day33);
                    break;
                    case '34':
                        setGetGameDay(res.data.day34);
                    break;
                    case '35':
                        setGetGameDay(res.data.day35);
                    break;
                    case '36':
                        setGetGameDay(res.data.day36);
                    break;
                    case '37':
                        setGetGameDay(res.data.day37);
                    break;
                    case '38':
                        setGetGameDay(res.data.day38);
                    break;
                    default:
                        console.log("No data")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    };

    useEffect(() => {getCalendar()}, [])
    
    return (
        <div className="game-day">
            <Typography variant="h3" className={classes.title}> {gameDay}/38 </Typography>
            {getGameDay.map((game) => 
            <Card key={uuid()} variant="outlined" style={{backgroundColor: game.color, marginBottom: "2%", borderRadius: "10px"}} >
                <CardContent className={classes.root}>
                    <CardContent className={classes.datePart}>
                        <Typography className={classes.date}>{game.when}</Typography>
                        <Typography className={classes.hour}>{game.hour}</Typography>
                    </CardContent>
                    <CardContent className={classes.scorePart}>
                        <CardContent className={classes.score}>
                            <Typography>{game.team1.teamName}</Typography>
                            <Typography>{game.team2.teamName}</Typography>
                        </CardContent>
                        <CardContent className={classes.score}>
                            <Typography  className={classes.score}>{game.team1.teamScore}</Typography>
                            <Typography className={classes.score}>{game.team2.teamScore}</Typography>
                        </CardContent>
                    </CardContent>
                </CardContent>
            </Card>
            )}
        </div>
    )
};

export default GameDay;