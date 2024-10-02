import React from 'react';
import logo from '../../assets/Secretoflight_logo.png';
import './footer.css';

function Footer(){
    return(
        <footer>
            <div className="footer-head">
                    <div className="logo-container footer-logo">
                        <img src={logo} alt="Logo Secret of Light" />
                    </div>
            </div>
            <div className="footer-main">
                <div>
                    <h2>Accendiamo idee brillanti insieme!</h2>
                        <div className="contact-us footer-cus">
                            <h4><a href="#form">Contattaci</a></h4>
                        </div>
                </div>
                
            </div>
            <div className="footer-information">
                <p className="fiscal-data">Secret of Light S.A.S. di Bosticco R. <br /> P.IVA 10886050011 <a href="mailto:info@secretoflight.it">info@secretoflight.it</a></p>
            </div>
        </footer>
    )
}

export default Footer