import React from 'react';
import './footer.css';
import knightlogo from '../../assets/StBernardsKnights.png';

const Footer = () => {
  return (
    <div className='chaos__footer section__padding' id='contact'>
        <div className='chaos__footer-links'>
            <div className='chaos__footer-links__logo'>
                <img src={knightlogo} alt="logo" />
                <p>P.O. Box 604, St. Bernard's Road, Gladstone, NJ 07934</p>
            </div>
            <div className='chaos__footer-links__div'>
                <h4>Social Media</h4>
                
                
                
                <a href='https://www.instagram.com/teamchaos2458/' target="_blank" rel="noopener noreferrer"><p>Instagram</p></a>
                <a href='https://www.youtube.com/channel/UCqk76hEIWZlGuEWP22WrCpQ' target="_blank" rel="noopener noreferrer"><p>YouTube</p></a>
                <a href='https://www.facebook.com/Team-Chaos-2458-103939814302828/' target="_blank" rel="noopener noreferrer"><p>Facebook</p></a>
            </div> 
            <div className='chaos__footer-links__div'>

                <h4>Team and Mentor Emails</h4>
                <a href='mailto:teamchaos2458@gmail.com'><p>teamchaos2458@gmail.com</p></a>
                <a href='mailto:jcoleman@gsbschool.org'><p>jcoleman@gsbschool.org</p></a>
                <a href='mailto:sbrown@gsbschool.org'><p>sbrown@gsbschool.org</p></a>
                <a href='mailto:lgrabowski@gsbschool.org'><p>lgrabowski@gsbschool.org</p></a>
                <a href='mailto:lmathus@gsbschool.org'><p>lmathus@gsbschool.org</p></a>
            </div> 
        </div>  
        <div className='chaos__footer-copyright'>
            <p>© 2023 Team Chaos 2458. All rights reserved.</p>
        </div>
    </div>
  )
};

export default Footer;