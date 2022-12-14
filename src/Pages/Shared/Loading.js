import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-content-center my-5">
      <ThreeCircles height="100" width="100" color="#4fa94d" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel="three-circles-rotating" outerCircleColor="" innerCircleColor="" middleCircleColor=""/>
    </div>
  );
};

export default Loading;
