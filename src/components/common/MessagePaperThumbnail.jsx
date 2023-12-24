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

  ${(props) =>
    props.isSelected &&
    `
    width: 70px;
    height: 70px;
  `}

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;

    ${(props) =>
      props.isSelected &&
      `
      width: 90px;
      height: 90px;
    `}
  }
`;

const MessagePaperThumbnail = ({ paperNum, isSelected, onSelect }) => {
  const today = new Date();
  const day = today.getDay(); // 일요일: 0 ~ 토요일: 6
  const imageSRC = `${MessagePapersSRC}/${MessagePapers[day].color}/${MessagePapers[day].name[paperNum]}`;

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
