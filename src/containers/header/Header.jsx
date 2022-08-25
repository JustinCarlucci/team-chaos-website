import React from 'react';
import './header.css';
import gsbknights from '../../assets/StBernardsKnights.png';
import knight from '../../assets/Knight.png';

const Header = () => {
  return (
    <div className="chaos__header section__padding" id="home">
        <div className="chaos__header-content">
            <h1 className="gradient__text">Team Chaos 2458</h1>
            <p>A small robotics team based in Gladstone, NJ at Gill St. Bernard's School. We compete in FIRST Robotics competitions.</p>
        </div>
        <div className="chaos__header-image">
            <img src={knight} alt="knight"></img>
        </div>
    </div>
  )
};

export default Header;