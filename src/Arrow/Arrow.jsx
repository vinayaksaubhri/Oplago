import React from "react";
import "./index.css";
import leftArrow from "./LeftArrow.svg";
import rightArrow from "./rightArrow.svg";
function Arrow({ className, style, onClick, right }) {
  return (
    <div className="Arrow__right" onClick={onClick}>
      {right ? <img src={rightArrow} alt="" /> : <img src={leftArrow} alt="" />}
    </div>
  );
}

export default Arrow;
