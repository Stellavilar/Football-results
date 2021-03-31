import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      textAlign: 'center',
    },
    firstRow: {
        textAlign: 'left'
    }
  }));

function Ligue1({classement}) {
    const classes = useStyles();
    
    //Map classement array
    const ranking = classement.map((rank, index) =>
        <Grid container spacing={0} key={index}>
            <Grid item xs={2}>
                <Paper className={classes.firstRow}>{rank.team}</Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper className={classes.paper}>{rank.points}</Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper className={classes.paper}>{rank.played}</Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper className={classes.paper}>{rank.win}</Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper className={classes.paper}>{rank.draw}</Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper className={classes.paper}>{rank.loss}</Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper className={classes.paper}>{rank.goalsFor - rank.goalsAgainst}</Paper>
            </Grid>
            
        </Grid>
    );

    return (
        <div className="league">
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Club</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paper}>Pts</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paper}>J</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paper}>G</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paper}>N</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paper}>P</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paper}>+/-</Paper>
                </Grid>
            </Grid>
            {ranking}
        </div>
    );
};

export default Ligue1;