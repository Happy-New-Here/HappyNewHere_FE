// 편지지 선택 시 보여줄 편지지 썸네일 한 개
import React from "react";
import styled from "styled-components";
import MessagePaperSRC from "../../utils/MessagePaperSRC";

const MessagePaperButton = styled.button`
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 5px;
  padding: 0px 0px;
  // background: ${(props) => `url(${props.backgroundImage})`};
  background: ${(props) => `url(${MessagePaperSRC[props.paperNum]})`};
  background-size: 100% 100%;

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }

  ${(props) =>
    props.isSelected &&
    `
    border: 2px solid black;

    // @media (prefers-color-scheme: dark) {
    //   border: 2px solid #9A0501;
    // }
    `}
  }
  // 이 밑으로 적으면 스타일 적용이 안 됨
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
