// 편지지 선택하는 곳
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPaperNum } from "../../../store/SelectedPaperNumSlice";
import MessagePaperThumbnail from "../../common/MessagePaperThumbnail";
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
  const [isPN1Selected, setIsPN1Selected] = useState(true); // 디폴트 편지지 1번

  const handlePaperSelect = (paperNum) => {
    setIsPN1Selected(false); // 1번 편지지 선택 해제
    dispatch(setSelectedPaperNum(paperNum));
  };

  useEffect(() => {
    console.log(`paper ${selectedPaperNum} is selected.`);
  }, [selectedPaperNum]);

  return (
    <MessagePaperContainer>
      <MessagePaperThumbnail
        paperNum="1"
        isSelected={isPN1Selected || selectedPaperNum === "1"}
        onSelect={handlePaperSelect}
      />
      <MessagePaperThumbnail
        paperNum="2"
        isSelected={selectedPaperNum === "2"}
        onSelect={handlePaperSelect}
      />
      <MessagePaperThumbnail
        paperNum="3"
        isSelected={selectedPaperNum === "3"}
        onSelect={handlePaperSelect}
      />
    </MessagePaperContainer>
  );
};

export default MessagePaperSelect;
