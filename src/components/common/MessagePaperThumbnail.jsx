// 편지지 선택 시 보여줄 편지지 썸네일 한 개
import React from "react";
import styled from "styled-components";
import messagePaperSRC from "../../utils/messagePaperSRC";

const MessagePaperButton = styled.button`
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 0;
  padding: 0px 0px;
  // background: ${(props) => `url(${props.backgroundImage})`};
  background: ${(props) => `url(${messagePaperSRC[props.paperNum]})`};
  background-size: 100% 100%;

  ${(props) =>
    props.isSelected &&
    `
    border: 2px solid black;
    `}
`;

const MessagePaperThumbnail = ({ paperNum, isSelected, onSelect }) => {
  const handlePaperChange = () => {
    onSelect(paperNum); // 부모 컴포넌트 MessagePaperSelect로 전달
  };

  return (
    <MessagePaperButton
      paperNum={paperNum}
      isSelected={isSelected}
      onClick={handlePaperChange}
    />
  );
};

export default MessagePaperThumbnail;
