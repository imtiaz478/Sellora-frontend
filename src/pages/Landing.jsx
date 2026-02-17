import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import WorksBestWith from "../components/worksBestWith/WorksBestWith";
import CoreFeatures from "../components/CoreFeatures/coreFeatures";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";


const Landing = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Hero />
            <WorksBestWith />
            <CoreFeatures />
            <Faq />
            <Footer />
        </div>
    );
};

export default Landing;