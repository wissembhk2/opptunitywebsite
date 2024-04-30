import React from 'react';
import './step.css';

const Step = ({ number, title, description }) => {

    return (
        <div className={`step text-start  ${number % 2 == 0 ? 'steppair' : 'stepimpair'}`}>
            <div className="step-header">
                <h2 className="step-number miniTitle">{number}</h2>
                <h2 className="step-title miniTitle">{title}</h2>
            </div>
            <p className="step-description">{description}</p>
        </div>
    );
};

export default Step;
