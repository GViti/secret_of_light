import React from "react";
import './aboutPage.css';
import WorkTogheter from '../homePage/sectionHomePage/WorkTogetherHome/WorkTogether.jsx'
import HeroAbout from "./sectionAboutPage/heroAboutPage/heroAboutPage.jsx";
import FormContatti from '../../components/Form/form.jsx';

function AboutPage(){
    return (
        <>
            <HeroAbout/>
            <WorkTogheter/>
            <FormContatti/>
        </>
    )
}

export default AboutPage;