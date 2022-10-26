import React from 'react';
import Banner from './Banner';
import Characteristics from './Features/Characteristics';
import FeatureInfo from './Features/FeatureInfo';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <Characteristics></Characteristics>
            <FeatureInfo></FeatureInfo>
        </div>
    );
};

export default Home;