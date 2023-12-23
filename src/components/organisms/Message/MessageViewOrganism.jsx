import React from "react";
import MessageView from "../../common/MessageView";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MessageViewOrganism = () => {
  const selectedMessageList = useSelector(
    (state) => state.calendar.messagesList
  );
  const selectedMessageIndex = useSelector(
    (state) => state.calendar.selectedMessageIndex
  );

  return (
    <MessageView
      context={selectedMessageList[selectedMessageIndex]?.context}
      senderNickname={selectedMessageList[selectedMessageIndex]?.senderNickname}
      paperNum={selectedMessageList[selectedMessageIndex]?.paperNum}
      anonymous={selectedMessageList[selectedMessageIndex]?.anonymous}
      dayColor={new Date(
        selectedMessageList[selectedMessageIndex]?.day
      ).getDay()}
    />
  );
};

export default MessageViewOrganism;
