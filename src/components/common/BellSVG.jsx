import React from "react";

const BellSVG = ({ type = "navy", day = 1 }) => {
  let imageSrc = "";
  if (type === "navy") {
    imageSrc = "/img/bell_navy.svg";
  } else if (type === "green") {
    imageSrc = "/img/bell_green.svg";
  } else if (type === "maroon") {
    imageSrc = "/img/bell_maroon.svg";
  } else if (type === "pink") {
    imageSrc = "/img/bell_pink.svg";
  } else if (type === "red") {
    imageSrc = "/img/bell_red.svg";
  } else if (type === "white") {
    imageSrc = "/img/bell_white.svg";
  } else if (type === "yellow") {
    imageSrc = "/img/bell_yellow.svg";
  }

  return (
    <div>
      <img src={imageSrc} alt="Bell" />
      <text>{day}</text>
    </div>
  );
};

export default BellSVG;
