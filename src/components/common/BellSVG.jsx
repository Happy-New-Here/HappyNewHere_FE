import React from "react";

const BellSVG = ({ type = "navy", date = 1, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      console.log("click");
      onClick(date);
    }
  };

  const BellSVGSRC = {
    navy: "/src/assets/bell_navy.svg",
    maroon: "/src/assets/bell_maroon.svg",
    green: "/src/assets/bell_green.svg",
    pink: "/src/assets/bell_pink.svg",
    red: "/src/assets/bell_red.svg",
    white: "/src/assets/bell_white.svg",
    yellow: "/src/assets/bell_yellow.svg",
  };

  const imageSrc = BellSVGSRC[type] || BellSVGSRC[1]; // 기본값은 1

  return (
    <div onClick={handleClick}>
      <img src={imageSrc} alt="Bell" />
      <text>{date}</text>
    </div>
  );
};

export default BellSVG;
