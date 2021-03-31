import React from 'react';
import env from "react-dotenv";

function Ligue1() {
    console.log(env.RAPID_API_KEY)
    return (
        <div className="league">
            ligue 1
        </div>
    );
};

export default Ligue1;