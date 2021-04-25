/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
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
                console.log(res.data)
            })
            .catch((err)=> {
                console.log(err)
            } )
    };
    useEffect(() => {getScorers()}, []);

    return (
        <Container fluid>
            <Typography variant="h5">Meilleurs buteurs</Typography>
            <Row className="show-grid" style={{ backgroundColor:'#ecf0f1', padding: '10px', fontWeight:'bold', borderRadius: '15px 15px 0px 0px'}} >
                <Col md={1} xs={1}></Col>
                <Col md={3} xs={3}>Nom</Col>
                <Col md={1} xs={1}></Col>
                <Col md={4} xs={4}>Club</Col>
                <Col md={2} xs={2}>Buts</Col>
                <Col md={1} xs={1}>Pen.</Col>
            </Row>
            {getScorer.map((scorer) => 
            <Row style={{ padding: '10px 0px'}} key={uuid()} >
                <Col md={1} xs={1} style={{ fontWeight: 'bold'}}> {scorer.number} </Col>
                <Col md={3} xs={3} style={{ fontWeight: 'bold'}}> {scorer.playerName} </Col>
                <Col md={1} xs={1}><img src ={scorer.clubLogo} alt="logo" style={{ width: '20px'}} /></Col>
                <Col md={4} xs={4} >  {scorer.club} </Col>
                <Col md={2} xs={2} > {scorer.goals} </Col>
                <Col md={1} xs={1} > {scorer.penalties} </Col>
            </Row>
            )}
        </Container>
    );
};

export default ScorersPage;