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
  align-items: center;
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
  };

  // 확인용
  // dispatch setSelectedPaperNum 실행 이후 실행되도록
  useEffect(() => {
    console.log(`selectedPaperNum: ${selectedPaperNum}`);
  }, [selectedPaperNum]);

  return (
    <MessagePaperContainer>
      <MessagePaperThumbnail
        paperNum="0"
        isSelected={isPN0Selected || selectedPaperNum === "0"}
        onSelect={handlePaperSelect}
      />
      <MessagePaperThumbnail
        paperNum="1"
        isSelected={selectedPaperNum === "1"}
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
