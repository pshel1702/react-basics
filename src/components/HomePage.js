// will display our apps homepage

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(){
    return (
        <div className="jumbotron">
            <h1>
                Pluralsight Administration
            </h1>
            <p>
                React, Flux and React Router for ultra-responsive web apps. 
            </p>
            <Link to='about' className="btn btn-primary">About</Link>
        </div>
    );
}

//everythign is private by default

export default HomePage; //needs a little less code to import with "Default"