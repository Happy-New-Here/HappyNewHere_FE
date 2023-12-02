import React from "react";
import { useSelector } from "react-redux";
import Header from "../common/Header";
import TodayQuestionOrganism from "../organisms/Message/TodayQuestionOrganism";
import MessageWriteButtonOrganism from "../organisms/Message/MessageWriteButtonOrganism";
import MessagePaperThumbnailOrganism from "../organisms/Message/MessagePaperThumbnailOrganism";
import MessageWriteOrganism from "../organisms/Message/MessageWriteOrganism";
import { ContentLayout } from "../../styles/utils";

const MessageWriteTemplate = () => {
  const isMessageWriteVisible = useSelector((state) => state.isMessageWriteVisible);

  return (
    <>
      <Header />
      <div>프로필과 상태메시지</div>
      <ContentLayout>
        <TodayQuestionOrganism />
        {isMessageWriteVisible ? (
          <>
            <MessagePaperThumbnailOrganism />
            <MessageWriteOrganism />
          </>
        ) : (
          <MessageWriteButtonOrganism />
        )}
      </ContentLayout>
    </>
  );
};

export default MessageWriteTemplate;
