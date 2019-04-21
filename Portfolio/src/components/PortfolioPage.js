import React from 'react';
import {Link} from 'react-router-dom';
import Item1 from './Item1';

const PortfolioPage = (props) => {
    return (
        <div>
            <h1>My Work </h1>
            <p>Checkout the stuff i've done : </p>
            <Link to='/portfolio/1'> Item 1 </Link>
            <Link to='/portfolio/2'> Item 2 </Link>
            
        </div>
    );
}

export default PortfolioPage;