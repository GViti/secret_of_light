import React from "react";
import './aboutPage.css';
import WorkTogheter from '../homePage/sectionHomePage/WorkTogetherHome/WorkTogether.jsx'
import HeroAbout from "./sectionAboutPage/heroAboutPage/heroAboutPage.jsx";

function AboutPage(){
    return (
        <>
            <HeroAbout/>
            <WorkTogheter/>
        </>
    )
}

export default AboutPage;