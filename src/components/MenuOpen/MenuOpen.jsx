import React, {useState} from "react";
import './MenuOpen.css';
import { Link } from "react-router-dom";
import instagram_icon from '../../assets/images/social-icon/icons8-instagram.svg';
import pinterest_icon from '../../assets/images/social-icon/icons8-pinterest.svg';
import twitter_icon from '../../assets/images/social-icon/icons8-twitterx.svg';

function MenuOpen ({isOpen, setIsOpen}){

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className={`menu-open ${isOpen ? 'active-menu' : ''}`}>
                <ul className="mobile-menu">
                    <li><Link onClick={handleLinkClick} to="/">Home</Link></li>
                    {/* <li><Link onClick={handleLinkClick} to="/products">Prodotti</Link></li> */}
                    <li><Link onClick={handleLinkClick} to="/works">Lavori</Link></li>
                    <li><Link onClick={handleLinkClick} to="/catalog">Catalogo</Link></li>
                    <li><Link onClick={handleLinkClick} to="/about">Chi<span style={{ color: 'transparent' }}>.</span>siamo</Link></li>
                </ul>
                <div className="contact-us menu">
                    <h3><Link to="/contacts">Contattaci</Link></h3>
                </div>
                <div className="social-icon menu">
                    <div className="social-icon-container">
                        <a href=""><img src={instagram_icon} alt="" /></a>
                    </div>
                    <div className="social-icon-container">
                        <a href=""><img src={pinterest_icon} alt="" /></a>
                    </div>
                    <div className="social-icon-container">
                        <a href=""><img src={twitter_icon} alt="" /></a>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default MenuOpen;