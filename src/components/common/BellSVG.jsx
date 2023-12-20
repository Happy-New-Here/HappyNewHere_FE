import React from "react";
import styled from "styled-components";
import GlobalFont from "../../styles/fonts";

const BellSVG = ({ type = "navy", date = 1, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      // console.log("click");
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
    <>
      <GlobalFont />
      <StyledDiv onClick={handleClick}>
        <img src={imageSrc} alt="Bell" />
        <StyledText type={type}>{date}</StyledText>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  font-family: "GrandifloraOne-Regular", sans-serif;
  position: relative;
  /* 다른 스타일 속성도 필요하다면 여기에 추가 */
`;

const StyledText = styled.span`
  color: ${(props) =>
    props.type === "white" || props.type === "yellow" ? "#000000" : "#ffffff"};
  font-weight: 800;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

export default BellSVG;
