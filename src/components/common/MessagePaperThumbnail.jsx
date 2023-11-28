// 편지지 선택 시 보여줄 편지지 썸네일 한 개
// 각 썸네일마다 고유 번호 필요
// 선택 가능하게 누를 수 있게 할 것
// 편지지 번호는 MessagePaperChoose에서 차례대로 부여 <MessagePaperThumbnail paperNum="1" />

import React, { useState } from "react";
import styled from "styled-components";

const MessagePaperButton = styled.button`
  width: 64px;
  height: 64px;
  border: none;
  background-image: ${(props) => `url(${props.backgroundImage})`};

  ${(props) =>
    props.selected &&
    `
    border: 2px solid black;
    `}
`;

const MessagePaperThumbnail = ({ paperNum, backgroundImage, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handlePaperChange = (props) => {
    setSelected(!selected);
    onSelect(paperNum); // 부모 컴포넌트 MessagePaperSelect로 전달
  };

  return (
    <MessagePaperButton
      className={`MessagePaperThumbnail ${selected ? "selected" : ""}`}
      backgroundImage={backgroundImage}
      selected={selected}
      onClick={handlePaperChange()}
    />
  );
};

export default MessagePaperThumbnail;
