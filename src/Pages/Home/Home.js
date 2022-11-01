import React from 'react';
// import Courses from '../Courses/Courses';
// import Teacher from '../Teachers/Teacher';
// import Teachers from '../Teachers/Teachers';
import Banner from './Banner';
import Characteristics from './Features/Characteristics';
import FeatureInfo from './Features/FeatureInfo';
import HomeReviews from './HomeReviews/HomeReviews';
import HomeTeachers from './HomeTeachers/HomeTeachers';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <Characteristics></Characteristics>
            <FeatureInfo></FeatureInfo>
            <HomeTeachers></HomeTeachers>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;