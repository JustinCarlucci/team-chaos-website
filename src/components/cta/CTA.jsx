import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className='chaos__cta'>
        <div className='chaos__cta-content'>
            <p>Want to support the Team?</p>
            <h3>Register to become a sponsor.</h3>
        </div>
        <div className="chaos__cta-button">
            <a href='https://www.gsbschool.org/support/give-now' target='_blank'><button type="button">Sponsor Us</button></a>
        </div>
    </div>
  )
};

export default CTA;