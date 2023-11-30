// 편지지 선택하는 곳
import React, { useState } from "react";
import styled from "styled-components";
import MessagePaperThumbnail from "../common/MessagePaperThumbnail";

const MessagePaperContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;

const MessagePaperSelect = () => {
  const [selectedPaperNum, setSelectedPaperNum] = useState(null);

  const handlePaperSelect = (paperNum) => {
    setSelectedPaperNum(paperNum);
  };

  return (
    <MessagePaperContainer>
      <MessagePaperThumbnail
        paperNum="1"
        backgroundImage="url('src/assets/MessagePaperSample.png')"
        onSelect={handlePaperSelect}
      />
      <MessagePaperThumbnail
        paperNum="2"
        backgroundImage="url('src/assets/MessagePaperSample.png')"
        onSelect={handlePaperSelect}
      />
      <MessagePaperThumbnail
        paperNum="3"
        backgroundImage="url('src/assets/MessagePaperSample.png')"
        onSelect={handlePaperSelect}
      />
    </MessagePaperContainer>
  );
};

export default MessagePaperSelect;
