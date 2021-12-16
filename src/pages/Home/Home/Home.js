import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Banner from '../Header/Banner/Banner';
import Hoodies from '../Hoodies/Hoodies';
import Latest from '../Latest/Latest';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Latest></Latest>
            <About></About>
            <Hoodies></Hoodies>
            <Review></Review>
        </div>
    );
};

export default Home;