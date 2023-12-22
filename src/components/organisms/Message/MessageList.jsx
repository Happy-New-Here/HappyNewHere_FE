import React, { useEffect, useState } from "react";
import MessageThumbnail from "../../common/MessageThumbnail";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSelectedMessageIndex } from "../../../store/calendar-slice";

const StyledMessageList = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

const MessageList = ({ messageList, selectedDate }) => {
  const dispatch = useDispatch();

  const today = new Date();
  const filteredDate = new Date(selectedDate).getDate();
  const selectedDay = new Date(selectedDate).getDay();
  const [activeIndex, setActiveIndex] = useState(-1); // 선택된 인덱스를 관리하는 상태

  const filteredMessages = messageList.filter((message) => {
    const messageDate = message.day.split("T")[0];
    const messageDay = messageDate.split("-")[2];
    return messageDay == filteredDate;
  });

  const handleThumbnailClick = (index) => {
    // 현재 클릭한 버튼의 인덱스와 다른 버튼의 활성화를 취소
    console.log("click", index);
    if (index !== activeIndex) {
      dispatch(setSelectedMessageIndex(index));
      setActiveIndex(index);
    }
  };

  return (
    <>
      <StyledMessageList>
        {filteredMessages.map((message, index) => {
          const originalIndex = messageList.indexOf(message);
          return (
            <MessageThumbnail
              key={index}
              day={selectedDay}
              paperNum={message.paperNum}
              sender={message.senderNickname}
              // 클릭 시 activeIndex와 현재 인덱스가 일치하면 active 클래스를 추가
              className={activeIndex === originalIndex ? "active" : ""}
              onClick={() => handleThumbnailClick(originalIndex)}
            />
          );
        })}
      </StyledMessageList>
    </>
  );
};

export default MessageList;
