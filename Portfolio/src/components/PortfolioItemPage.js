import React from 'react';

const PortfolioItemPage = (props) => {
    return(
        <p>This is my project named has: {props.match.params.id} </p>
    );
}

export default PortfolioItemPage;