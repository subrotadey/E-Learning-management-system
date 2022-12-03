import React from "react";
import Banner from "./Banner";
import Characteristics from "./Features/Characteristics";
import FeatureInfo from "./Features/FeatureInfo";
import HomeReviews from "./HomeReviews/HomeReviews";
import HomeTeachers from "./HomeTeachers/HomeTeachers";
import Slider from "./Slider";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Banner></Banner>
      <Characteristics></Characteristics>
      <FeatureInfo></FeatureInfo>
      <HomeTeachers></HomeTeachers>
      <HomeReviews></HomeReviews>
      <MessengerCustomerChat
        pageId="106685705609442"
        appId="528274842516735"
      />
      ,
    </div>
  );
};

export default Home;
