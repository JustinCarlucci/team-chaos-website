import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './nav.css';
import logo from '../../assets/logo1.png';
import gsb from '../../assets/gill.png';

const Menu = () => (
	<>
		<p><a href="#home">Home</a></p>
		<p><a href="#about">About Us</a></p>
		<p><a href="#gallery">Gallery</a></p>
		<p><a href="#calendar">Calendar</a></p>
		<p><a href="#contact">Contact Us</a></p>
	</>
)


const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="chaos__navbar">
        <div className="chaos__navbar-links">
            <div className="chaos__navbar-links_gsb-logo">
                <img src={gsb} alt="gsb" />
            </div>
            <div className="chaos__navbar-links_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="chaos__navbar-links_container">
							<Menu />
            </div>
        </div>
        <div className="chaos__navbar-sign">
            <p>Members 	&rarr;</p>
            <button type="button">Portal</button>
        </div>
        <div className="chaos__navbar-menu">
						{toggleMenu
							? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
							: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
						}
						{toggleMenu && (
							<div className="chaos__navbar-menu_container scale-up-center">
								<div className="chaos__navbar-menu_container-links">
									<Menu />
									<div className="chaos__navbar-menu_container-links-sign">
											<p>Members --</p>
											<button type="button">Portal</button>
									</div>
								</div>
							</div>
						)}
        </div>
    </div>
  )
};

export default Nav;