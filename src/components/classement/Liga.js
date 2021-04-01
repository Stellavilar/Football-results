import React from 'react';
import { Typography } from '@material-ui/core';
import logo from '../../img/laligalogo.png';
import { v4 as uuid } from 'uuid';


function Liga({spanishRanking}) {

    return (
        <div className="league">
            <img src={logo} alt="liga logo" className="liga-logo"/>
            <Typography variant="h2"> Saison 2020-2021 </Typography> 
            <div className="grid">
                <div className="table-head">
                    <div className="logo"></div>
                    <div className="club">Club</div>
                    <div className="head">Pts</div>
                    <div className="head">J</div>
                    <div className="head">G</div>
                    <div className="head">N</div>
                    <div className="head">P</div>
                    <div className="last-head">+/-</div>
                </div>
                { spanishRanking.map((rank) => 
                <div className="table-rows" key={uuid()}>
                    <div className="logo-row" >
                        <img src ={rank.logo} alt="logo"/>
                    </div>
                    <div className="club-row">{rank.team}</div>
                    <div className="first-row">{rank.points}</div>
                    <div className="row">{rank.played}</div>
                    <div className="row">{rank.win}</div>
                    <div className="row">{rank.draw}</div>
                    <div className="row">{rank.loss}</div>
                    <div className="row">{rank.goalsFor - rank.goalsAgainst}</div>
                </div>
                )}
            
            </div>
            
            
            
        </div>
    );
};

export default Liga;