import React from "react";
import './HeroHome.css';
import imgHero from '../../assets/images/SUBLI_3.jpg';

function HeroHome(){
    return (
        <section className="home-intro">
            <div className="intro-slogan">
                <h1 id="slogan">Reveal the beauty in every <br/>shadow with Secret of Light.</h1>
                <h2 className="from-slogan">Since 2013</h2>
            </div>
            <div className="container-img-intro">
                <img src={imgHero} alt="Immagine light design intro"/>
            </div>
        </section>
    )
}

export default HeroHome;