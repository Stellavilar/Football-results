import React from 'react';
import { useSelector } from 'react-redux';

function Homepage() {

    const titles = useSelector(state => state );
    console.log(titles)
    return (
        <div className="homepage">
        </div>
    );
};

export default Homepage;