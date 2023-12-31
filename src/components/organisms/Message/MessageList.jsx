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
  &.active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const MessageList = ({ messageList, selectedDate, selectedDateForm }) => {
  const dispatch = useDispatch();

  const today = new Date();
  // console.log("selectedDate->", selectedDate);
  const filteredDate = new Date(selectedDate).getDate();
  const selectedDay = new Date(selectedDate).getDay();
  // console.log("filteredDate->", filteredDate, selectedDay);
  // const filteredDate = selectedDate.getDate(); // Extract day directly from the Date object
  // const selectedDay = selectedDate.getDay();
  const [activeIndex, setActiveIndex] = useState(-1);

  const filteredMessages = messageList.filter((message) => {
    const messageDate = message.day.split("T")[0];
    const messageDay = messageDate.split("-")[2];
    return messageDay == filteredDate;
  });

  const handleThumbnailClick = (index) => {
    console.log("click", index);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (activeIndex !== -1) {
      dispatch(setSelectedMessageIndex(activeIndex));
    }
  }, [activeIndex, dispatch]);

  return (
    <>
      <StyledMessageList>
        {filteredMessages.map((message, index) => {
          const originalIndex = messageList.indexOf(message);
          console.log("message", message);
          const displayName = message.anonymous
            ? "익명의 산타"
            : message.senderNickname;
          // 메세지에 타입값들을 콘솔로찍으면 볼수있지/????? -> true
          //message.anonymous이게 익명유무인데
          //

          return (
            <MessageThumbnail
              key={index}
              day={selectedDay}
              paperNum={message.paperNum}
              sender={displayName}
              originalIndex={originalIndex}
              active={activeIndex === originalIndex}
              onClick={() => handleThumbnailClick(originalIndex)}
            />
          );
        })}
      </StyledMessageList>
    </>
  );
};

export default MessageList;
