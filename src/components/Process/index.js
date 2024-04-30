import React from 'react';
import Step from './Step';
import Connector from './Connector';
import './process.css';

const ProcessMap = () => {
    const steps = [
        { number: '1', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },
        { number: '2', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },
        { number: '3', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },
        { number: '4', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },
        { number: '5', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },
        { number: '6', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },
        { number: '7', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },
        { number: '8', title: 'Individuals', description: 'Your path to becoming a certified Personal Support Worker (PSW) in Canada begins here. OPPORTUNITY provides a comprehensive platform for you to upskill, gain certification, and navigate the immigration process with ease.' },

        // ... Add the rest of the steps here
    ];

    return (
        <div className="">
            {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                    <Step {...step} />
                </React.Fragment>
            ))}
        </div>
    );

};

export default ProcessMap;
