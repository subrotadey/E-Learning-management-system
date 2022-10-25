import React from 'react';
import Banner from './Banner';
import Characteristics from './Features/Characteristics';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <Characteristics></Characteristics>
        </div>
    );
};

export default Home;