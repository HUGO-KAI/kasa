import React from "react";
import './Banner.scss'

const Banner = ({text}) => {
  return (
    <div className="BannerContainer" >
      {text ? <h1>{text}</h1> : null}
    </div>
  );
};

export default Banner;