/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Typography, Breadcrumbs, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Calendar() {
    const history = useHistory();

    //Get league name thanks to url
    const url_string = window.location.href
    const league = url_string.slice(url_string.lastIndexOf('/') + 1);
    //On click number breadcrumbs, open day page
    const handleClick = (e) => {
        const gameNumber = e.target.innerText;
        history.push(`/journee/${gameNumber}/league/${league}`);
        window.location.reload(false)
    };

    return (
        <div className="calendar">
            <Breadcrumbs aria-label="breadcrumb">
                <Typography >Journée: </Typography>
                <Link  onClick={handleClick} >
                    31
                </Link>
                <Link  onClick={handleClick}>
                    32
                </Link>
                <Link  onClick={handleClick}>
                    33
                </Link>
                <Link  onClick={handleClick}>
                    34
                </Link>
                <Link  onClick={handleClick}>
                    35
                </Link>
                <Link  onClick={handleClick}>
                    36
                </Link>
                <Link  onClick={handleClick}>
                    37
                </Link>
                <Link  onClick={handleClick}>
                    38
                </Link>
            </Breadcrumbs>
        </div>
    )
};

export default Calendar;