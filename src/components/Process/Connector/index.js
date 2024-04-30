import React from 'react';
import './connector.css';

const Connector = ({ isLast }) => {
    return (
        <div className={`connector ${isLast ? 'connector-last' : ''}`}>
            <div className="connector-line"></div>
            {<div className="connector-end"></div>}
            <p className='test'>hahahaha</p>
        </div>
    );
};


export default Connector;
