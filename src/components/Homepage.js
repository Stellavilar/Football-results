import React from 'react';
// import { useSelector } from 'react-redux';
// import { Typography, Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';


function Homepage() {

    //Get titles clicked on tab menu
    // const titles = useSelector(state => state );

    return (
        <div className="homepage">
                {/* <div className="homepage-dashboard">
                    <Typography variant="h2"> {titles.title.name}</Typography> 
                    <div className="homepage-items">
                        {titles.title.name ?  
                        <>
                        <Link to={`/classement/${titles.title.name.replace(/\s+/g, '').toLowerCase()}`}>
                            <Button variant="contained">
                                {titles.title.item1}
                            </Button>
                        </Link>
                        <Link to={`/calendrier/${titles.title.name.replace(/\s+/g, '').toLowerCase()}`}>
                            <Button variant="contained">
                                {titles.title.item2}
                            </Button>
                        </Link>
                        <Link to={`/buteurs/${titles.title.name.replace(/\s+/g, '').toLowerCase()}`}>
                            <Button variant="contained">
                                {titles.title.item3}
                            </Button>
                        </Link>
                        </> 
                        : null}
                    </div>
                </div> */}
        </div>
    );
};

export default Homepage;