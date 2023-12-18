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
  const [isPN0Selected, setIsPN0Selected] = useState(true); // 디폴트 편지지가 0번

  const handlePaperSelect = (paperNum) => {
    if (isPN0Selected) {
      setIsPN0Selected(false); // 0번 편지지 선택 해제
    }
    dispatch(setSelectedPaperNum(paperNum));
    // console.log(`paper ${selectedPaperNum} is selected.`);
  };

  return (
    <MessagePaperContainer>
      <MessagePaperThumbnail
        paperNum="0"
        isSelected={isPN0Selected || selectedPaperNum === "0"}
        onSelect={() => handlePaperSelect(paperNum)}
      />
      <MessagePaperThumbnail
        paperNum="1"
        isSelected={selectedPaperNum === "1"}
        onSelect={() => handlePaperSelect(paperNum)}
      />
      <MessagePaperThumbnail
        paperNum="2"
        isSelected={selectedPaperNum === "2"}
        onSelect={() => handlePaperSelect(paperNum)}
      />
      <MessagePaperThumbnail
        paperNum="3"
        isSelected={selectedPaperNum === "3"}
        onSelect={() => handlePaperSelect(paperNum)}
      />
    </MessagePaperContainer>
  );
};

export default MessagePaperSelect;
