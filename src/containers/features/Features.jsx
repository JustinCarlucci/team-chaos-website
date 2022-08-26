import React from 'react';
import { RiImage2Fill } from 'react-icons/ri';
import { Feature } from '../../components';
import Carousel from '../../components/carousel/Carousel.jsx';
import './features.css';

const Features = () => {
  return (
    <div className='chaos__features section__padding' id='gallery'>
        <div className='chaos__features-heading'>
            <h1>Team Gallery</h1>
            <p>Standing at the forefront of STEM education, Team Chaos aims to bring comradery and compassion to the Robotics community. Innovation and leadership are not just goals for us, they're a way of life.</p>
            <p>Our historically small roster has furthered our collective understanding of the different subjects in STEM. We strive to make a difference in our community through GSB's core values and ironically "chaotic" teamwork.</p>
        </div>
        <div className='chaos__features-slideshow'>
            <Feature title='' text=''/>
            <Carousel />
        </div>
    </div>
  )
};

export default Features;