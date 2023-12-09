import React from "react";
import { useMediaQuery } from "react-responsive";
import GiftBox from "../common/GiftBox";
import MessageList from "../organisms/Message/MessageList";
import MessageViewOrganism from "../organisms/Message/MessageViewOrganism";
import Footer from "../common/Footer";

const HomeTemplate = () => {

  const isPc = useMediaQuery({
    query: "(min-width:768px)"
});

  return (
    <>
      홈 템플릿입니다.
      <GiftBox />
      <MessageList />
      <MessageViewOrganism />
      <Footer currentPage="home" isPc={isPc} />
    </>
  );
};

export default HomeTemplate;
