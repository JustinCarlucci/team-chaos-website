import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='chaos__features-container__feature'>
        <div>
            <div className='chaos__features-container__feature-title'>
                <div />
                <h1>{title}</h1>
            </div>
            <div className='chaos__features-container__feature-text'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
};

export default Feature;