import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button } from '@material-ui/core';


function Homepage() {

    //Get titles clicked on tab menu
    const titles = useSelector(state => state );

    return (
        <div className="homepage">
                <div className="homepage-dashboard">
                    <Typography variant="h2"> {titles.title.name}</Typography> 
                    <div className="homepage-items">
                        {titles.title.name ?  
                        <>
                         <Button variant="contained" href="#">
                            {titles.title.item1}
                        </Button>
                        <Button variant="contained" href="#">
                            {titles.title.item2}
                        </Button>
                        <Button variant="contained" href="#">
                            {titles.title.item3}
                        </Button>
                        </> 
                        : null}
                    </div>
                </div>
        </div>
    );
};

export default Homepage;