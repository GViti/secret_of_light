import React from 'react';
import logo from '../../assets/Secretoflight_logo.png';
import './header.css';

function HeaderMenu(){
    return (
        <header>
                <div className="logo-container">
                    <img src={logo} alt="Logo Secret of Light" />
                </div>
                <div className="contact-us">
                        <h4><a href="#form">Contattaci</a></h4>
                    </div>
        </header>
    );
}

export default HeaderMenu;
