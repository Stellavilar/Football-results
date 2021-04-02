/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    number: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "1.5em",
        borderBottom: "solid 0.5px",
    },
    club: {
        fontStyle: "italic",
        textAlign: "center"
    },
    name: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "1.3em",
        marginTop: "25px"
    },
    data: {
        display: "flex"
    },
    title: {
        fontWeight: "bold",
        marginRight:"8px"
    },
    result: {

    }
});

function ScorersPage() {
    const classes = useStyles();

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
            <Typography variant="h2"> Meilleurs buteurs </Typography>
            {getScorer.map((scorer) =>
            <Card key={uuid()} variant="outlined">
                <CardContent className={classes.root}>
                    <Typography className={classes.number} color="textSecondary">{scorer.number}</Typography>
                    <Typography className={classes.name}>{scorer.playerName}</Typography>
                    <Typography className={classes.club} color="textSecondary">{scorer.club}</Typography>
                    <CardContent className={classes.data}>
                        <Typography className={classes.title}>Total buts:</Typography>
                        <Typography className={classes.result}>{scorer.goals}</Typography>
                    </CardContent>
                    <CardContent className={classes.data}>
                        <Typography className={classes.title}>Penalties:</Typography>
                        <Typography className={classes.result}>{scorer.penalties}</Typography>
                    </CardContent>
                </CardContent>
            </Card>
            
            )}
        </div>
    );
};

export default ScorersPage;