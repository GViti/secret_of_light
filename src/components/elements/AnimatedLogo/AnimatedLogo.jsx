import React from 'react';
import './AnimatedLogo.css';
import logoSol from '../../../assets/Secretoflight_logo.png';

function AnimatedLogo() {
  return (
    <div className="logo-anim-container ">
      <img src={logoSol} alt="" className='logo-anim ' />
    </div>
  );
}

export default AnimatedLogo;

