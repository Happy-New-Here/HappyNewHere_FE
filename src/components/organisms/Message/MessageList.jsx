// MessageThumbnail 개수대로 동적 렌더링
import React, { useEffect, useState } from "react";
import MessageThumbnail from "../../common/MessageThumbnail";
// import axios from "axios";
// import { BASE_URL } from "../../../utils/URL";
import styled from "styled-components";

const StyledMessageList = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

const MessageList = ({ messageList, selectedDate }) => {
  console.log("도착한메세지", messageList, selectedDate);

  const today = new Date(); // 일요일: 0 ~ 토요일: 6
  const filteredDate = new Date(selectedDate).getDate();
  const selectedDay = new Date(selectedDate).getDay();
  const filteredMessages = messageList.filter((message) => {
    const messageDate = message.day.split("T")[0];
    // 연-월-일 중에서 일(day) 부분만 추출합니다.
    const messageDay = messageDate.split("-")[2];
    return messageDay == filteredDate;
  });

  console.log("filteredMessages:", filteredMessages);

  return (
    // <StyledMessageList>
    //   <MessageThumbnail day={day} paperNum="0" />
    //   <MessageThumbnail day={day} paperNum="1" />
    //   <MessageThumbnail day={day} paperNum="2" />
    //   <MessageThumbnail day={day} paperNum="3" />
    // </StyledMessageList>
    <>
      <StyledMessageList>
        {filteredMessages.map((message, index) => (
          <MessageThumbnail
            key={index}
            day={selectedDay}
            paperNum={message.paperNum}
            sender={message.senderNickname}
          />
        ))}
      </StyledMessageList>
    </>
  );
};

export default MessageList;
