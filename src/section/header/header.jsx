import React from 'react';
import logo from '../../assets/Secretoflight_logo.png';
import './header.css';

function HeaderMenu(){
    return (
        <header>
                <div className="logo-container">
                    <img src={logo} alt="Logo Secret of Light" />
                </div>
        </header>
    );
}

export default HeaderMenu;
