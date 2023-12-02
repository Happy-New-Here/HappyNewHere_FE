import React from "react";
import TodayQuestion from "../organisms/Message/TodayQuestionOrganism";
import MessagePaperSelect from "../organisms/Message/MessagePaperThumbnailOrganism";
import MessageWriteOrganism from "../organisms/Message/MessageWriteOrganism";
import { ContentLayout } from "../../styles/utils";

const MessageWriteTemplate = () => {
  return (
    <>
      <div>프로필과 상태메시지</div>
      <ContentLayout>
        <TodayQuestion />
        <>
          <MessagePaperSelect />
          <MessageWriteOrganism />
        </>
      </ContentLayout>
    </>
  );
};

export default MessageWriteTemplate;
