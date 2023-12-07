import React from "react";
import GiftBox from "../common/GiftBox";
import MessageList from "../organisms/Message/MessageList";
import MessageViewOrganism from "../organisms/Message/MessageViewOrganism";

const HomeTemplate = () => {
  return (
    <>
      홈 템플릿입니다.
      <GiftBox />
      <MessageList />
      <MessageViewOrganism />
    </>
  );
};

export default HomeTemplate;
