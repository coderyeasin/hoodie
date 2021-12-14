import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Hoodies from '../Hoodies/Hoodies';
import Latest from '../Latest/Latest';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Features></Features>
            <Latest></Latest>
            <About></About>
            <Hoodies></Hoodies>
            <Review></Review>
        </div>
    );
};

export default Home;