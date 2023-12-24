// 편지지 선택 시 보여줄 편지지 썸네일 한 개
import React from "react";
import styled from "styled-components";
import { MessagePapersSRC, MessagePapers } from "../../utils/MessagePapersSRC";

const StyledMessagePaperThumbnail = styled.img`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 5px;
  padding: 0px 0px;
  cursor: pointer;

  /* Hover 효과: 약간 위로 이동 */
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-4px);
  }

  ${(props) =>
    props.isSelected &&
    `
    transform: translateY(-4px);
    z-index: 1;
  `}

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;

    ${(props) =>
      props.isSelected &&
      `
      transform: translateY(-4px);
      z-index: 1;
    `}
  }
`;

const MessagePaperThumbnail = ({ paperNum, isSelected, onSelect }) => {
  const today = new Date();
  const day = today.getDay(); // 일요일: 0 ~ 토요일: 6
  // 요일에 따른 색상 매핑
  const dayColorMapping = {
    0: "Red", // 일
    1: "Navy", // 월
    2: "White", // 화
    3: "Green", // 수
    4: "Brown", // 목
    5: "Pink", // 금
    6: "Yellow", // 토
  };
  const dayColor = dayColorMapping[day];

  const imageSRC = MessagePapers[dayColor]?.[paperNum] || NavyPuppy; // 기본값으로 NavyPuppy

  const handlePaperChange = () => {
    onSelect(paperNum); // 부모 컴포넌트 MessagePaperSelect로 전달
  };

  return (
    <StyledMessagePaperThumbnail
      // day={day}
      // paperNum={paperNum}
      src={imageSRC}
      alt="Message Paper"
      isSelected={isSelected}
      onClick={handlePaperChange}
    />
  );
};

export default MessagePaperThumbnail;
