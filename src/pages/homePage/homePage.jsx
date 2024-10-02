import React from "react";
import HeroHome from './sectionHomePage/HeroHome/HeroHome.jsx';
import ProjectsHome from "./sectionHomePage/ProjectsHome/ProjectsHome.jsx";
// import ProductsHome from "./sectionHomePage/ProductsHome/ProductsHome.jsx";
import WorkTogether from "./sectionHomePage/WorkTogetherHome/WorkTogether.jsx";
// import AboutUs from "./sectionHomePage/AboutUsHome/AboutUs.jsx";
import FormContatti from '../../components/Form/form.jsx';


function HomePage(){
    return(
        <>
            <HeroHome/>
            <ProjectsHome/>
            {/* <ProductsHome/> */}
            <WorkTogether/>
            {/* <AboutUs/> */}
            <FormContatti/>
        </>
    )
}

export default HomePage;