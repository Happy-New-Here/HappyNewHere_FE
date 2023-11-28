// 편지지 선택하는 곳
import React, { useState } from "react";
import MessagePaperThumbnail from "../common/MessagePaperThumbnail";

const MessagePaperChoose = () => {
  const [selectedPaperNum, setSelectedPaperNum] = useState(null);

  const handlePaperSelect = (paperNum) => {
    setSelectedPaperNum(paperNum);
  };

  return (
    <div>
      <MessagePaperThumbnail paperNum="1" onSelect={handlePaperSelect} />
      <MessagePaperThumbnail paperNum="2" onSelect={handlePaperSelect} />
      <MessagePaperThumbnail paperNum="3" onSelect={handlePaperSelect} />
    </div>
  );
};

export default MessagePaperChoose;
