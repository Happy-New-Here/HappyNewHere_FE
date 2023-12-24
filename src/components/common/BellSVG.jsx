import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalFont from "../../styles/fonts";


const BellSVG = ({ type = "navy", date = 1, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(date);
      // 클릭 시 현재 클릭한 날짜만 활성화 상태로 설정하고, 다른 날짜는 비활성화 상태로 변경
      setIsActive(true);

      // 클릭 후 1초 후에 isActive를 다시 false로 설정하여 활성화 상태를 해제
      setTimeout(() => {
        setIsActive(false);
      }, 1000);
    }
  };

  const BellSVGSRC = {
    navy: "../../assets/bell_navy.svg",
    maroon: "../../assets/bell_maroon.svg",
    green: "../../assets/bell_maroon.svg",
    pink: "../../assets/bell_pink.svg",
    red: "../../assets/bell_red.svg",
    white: "../../assets/bell_white.svg",
    yellow: "../../assets/bell_yellow.svg",
  };

  const imageSrc = BellSVGSRC[type] || BellSVGSRC[1]; // 기본값은 1

  // 클릭된 상태일 때 스타일을 변경
  const activeStyle = isActive[date]
    ? {
        transform: "translateY(-4px)",
        zIndex: 1, // 클릭된 요소를 위에 표시
        // 추가적인 활성화 스타일을 여기에 추가하세요
      }
    : {};

  return (
    <>
      <GlobalFont />
      <StyledDiv onClick={handleClick} style={activeStyle}>
        <img src={imageSrc} alt="Bell" />
        <StyledText type={type}>{date}</StyledText>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  font-family: "GrandifloraOne-Regular", sans-serif;
  position: relative;
  cursor: pointer;

  /* Hover 효과: 약간 위로 이동 */
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-4px);
  }

  /* 배경을 투명하게 설정 */
  background: transparent !important;

  /* 클릭된 상태에서 스타일 변경 */
  ${(props) =>
    props.style
      ? `
    transform: ${props.style.transform};
    z-index: ${props.style.zIndex};
  `
      : ""};
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
