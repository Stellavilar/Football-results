import React, { useState } from 'react';
import { Typography, Breadcrumbs, Link} from '@material-ui/core';
import logo from '../../img/serialogo.png';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { selectTitle } from '../../redux/actions';
import ScorersPage from '../ScorersPage';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';

function SerieA({italianRanking}) {
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
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" onClick={() => history.push(`/calendrier/seriea`)} >Calendrier</Link>
                { showResults ? 
                <Link color="inherit" onClick={() => hideScorers()} >Classement</Link> 
                : 
                <Link color="inherit" onClick={dispatchLeagueName} >Buteurs</Link>
                }
            </Breadcrumbs>
            <img src={logo} alt="serie a logo"  className="seriea-logo"/>
            <Typography variant="h2"> Saison 2020-2021 </Typography> 
            { showResults ? <ScorersPage /> :
                    <Container fluid>
                        <Row className="show-grid" style={{ backgroundColor:'#ecf0f1', padding: '10px', fontWeight:'bold', borderRadius: '15px 15px 0px 0px'}} >
                            <Col md={1} xs={1}></Col>
                            <Col md={3} xs={3}>Club</Col>
                            <Col md={1} xs={1}>Pts</Col>
                            <Col md={1} xs={1}>J</Col>
                            <Col md={1} xs={1} >G</Col>
                            <Col md={1} xs={1}>N</Col>
                            <Col md={1} xs={1}>P</Col>
                            <Col md={1} xs={1}>+/-</Col>
                        </Row>
                        {italianRanking.map((rank) => 
                        <Row style={{ padding: '10px 0px'}} key={uuid()} >
                            <Col md={1} xs={1} > <img src ={rank.logo} alt="logo" style={{ width: '20px'}} /> </Col>
                            <Col md={3} xs={3}>{rank.team}</Col>
                            <Col md={1} xs={1} style={{fontWeight: 'bold'}} > {rank.points} </Col>
                            <Col md={1} xs={1}> {rank.played} </Col>
                            <Col md={1} xs={1}> {rank.win} </Col>
                            <Col md={1} xs={1}> {rank.draw} </Col>
                            <Col md={1} xs={1}> {rank.loss} </Col>
                            <Col md={1} xs={1}> {rank.goalsFor - rank.goalsAgainst} </Col>
                        </Row>
                        )}
                    </Container>
            }
        </div>
    );
};

export default SerieA;