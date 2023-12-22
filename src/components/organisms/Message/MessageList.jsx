// MessageThumbnail 개수대로 동적 렌더링
import React, { useEffect, useState } from "react";
import MessageThumbnail from "../../common/MessageThumbnail";
// import axios from "axios";
// import { BASE_URL } from "../../../utils/URL";
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
  console.log("도착한메세지", messageList, selectedDate);

  const dispatch = useDispatch();

  const today = new Date(); // 일요일: 0 ~ 토요일: 6
  const filteredDate = new Date(selectedDate).getDate();
  const selectedDay = new Date(selectedDate).getDay();
  const filteredMessages = messageList.filter((message) => {
    const messageDate = message.day.split("T")[0];
    // 연-월-일 중에서 일(day) 부분만 추출합니다.
    const messageDay = messageDate.split("-")[2];
    return messageDay == filteredDate;
  });

  const handleThumbnailClick = (index) => {
    // Dispatch the action to store the selected message index
    dispatch(setSelectedMessageIndex(index));
  };

  console.log("filteredMessages:", filteredMessages);

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
              // messageList의 특정 메세지 선택
              onClick={() => handleThumbnailClick(originalIndex)}
            />
          );
        })}
      </StyledMessageList>
    </>
  );
};

export default MessageList;
