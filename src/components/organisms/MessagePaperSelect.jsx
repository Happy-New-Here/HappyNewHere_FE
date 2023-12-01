// 편지지 선택하는 곳
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPaperNum } from "../../store/SelectedPaperNumSlice";
import MessagePaperThumbnail from "../common/MessagePaperThumbnail";
import styled from "styled-components";

const MessagePaperContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  // padding: 0 32px;
`;

const MessagePaperSelect = () => {
  const dispatch = useDispatch();
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);

  const handlePaperSelect = (paperNum) => {
    dispatch(setSelectedPaperNum(paperNum));
  };

  useEffect(() => {
    console.log(`paper ${selectedPaperNum} is selected.`);
  }, [selectedPaperNum]);

  return (
    <MessagePaperContainer>
      <MessagePaperThumbnail
        paperNum="1"
        backgroundImage="url('src/assets/MessagePaperSample.png')"
        isSelected={selectedPaperNum === "1"}
        onSelect={handlePaperSelect}
      />
      <MessagePaperThumbnail
        paperNum="2"
        backgroundImage="url('src/assets/MessagePaperSample.png')"
        isSelected={selectedPaperNum === "2"}
        onSelect={handlePaperSelect}
      />
      <MessagePaperThumbnail
        paperNum="3"
        backgroundImage="url('src/assets/MessagePaperSample.png')"
        isSelected={selectedPaperNum === "3"}
        onSelect={handlePaperSelect}
      />
    </MessagePaperContainer>
  );
};

export default MessagePaperSelect;
