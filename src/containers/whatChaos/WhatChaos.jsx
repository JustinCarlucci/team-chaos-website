import React from 'react';
import { Feature } from '../../components';
import './whatChaos.css';

const WhatChaos = () => {
  return (
    <div className="chaos__whatchaos" id="whatChaos">
        <div className="chaos__whatchaos-heading">
            <h1>About Us</h1>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <button>Learn More</button>
            </a>
        </div>
        <div className='chaos__whatchaos-container'>
            <Feature title="History" text="Founded in 2008 by a GSB high school physics teacher, Team Chaos has been a catalyst for passion, innovation, and teamwork in the Gladstone community."/>
            <Feature title="Mission" text="Foster great innovation and togetherness in the STEM community and GSB."/>
            <Feature title="Events" text="I thought about doing a charity ping pong tournament at GSB."/>
        </div>
    </div>
  )
};

export default WhatChaos;