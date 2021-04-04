import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import logo from '../../img/logoLigue1.png';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { selectTitle } from '../../redux/actions';
import ScorersPage from '../ScorersPage';
import { useHistory} from 'react-router-dom';


function Ligue1({classement}) {
    const history = useHistory();
    const dispatch = useDispatch();

     /**Display top scorers page */
     const [ showResults, setShowResults ] = useState(false);

    const dispatchLeagueName = () => {
        //Open scorers page
        setShowResults(true);
        //get league name through the url
        const url_string = window.location.href ;
        //Use dispatch redux to send league title to state
        dispatch(selectTitle(url_string.slice(url_string.lastIndexOf('/') + 1)));
    };

    const hideScorers = () => {
        //Clode scorers page
        setShowResults(false);
        //Clean the state
        dispatch(selectTitle(""));
    };

    return (
        <div className="league">
            <Button variant="contained" color="secondary" onClick={() => history.push(`/calendrier/ligue1`)} >Calendrier</Button>
            { showResults ? 
            <Button variant="contained" color="primary" onClick={() => hideScorers()} >Classement</Button> 
            : 
            <Button variant="contained" color="secondary" onClick={dispatchLeagueName} >Buteurs</Button>
            }
            <img src={logo} alt="ligue 1 logo" className="league-logo" />
            <Typography variant="h2"> Saison 2020-2021 </Typography> 

            { showResults ? <ScorersPage /> : 
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
                    { classement.map((rank) => 
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
                </div>}
        </div>
    );
};

export default Ligue1;