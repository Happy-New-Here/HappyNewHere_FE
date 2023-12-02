import React from "react";
import { useSelector } from "react-redux";
import TodayQuestion from "../organisms/Message/TodayQuestionOrganism";
import MessageWriteButtonOrganism from "../organisms/Message/MessageWriteButtonOrganism";
import MessagePaperSelect from "../organisms/Message/MessagePaperThumbnailOrganism";
import MessageWriteOrganism from "../organisms/Message/MessageWriteOrganism";
import { ContentLayout } from "../../styles/utils";

const MessageWriteTemplate = () => {
  const isMessageWriteVisible = useSelector((state) => state.isMessageWriteVisible);

  return (
    <>
      <div>프로필과 상태메시지</div>
      <ContentLayout>
        <TodayQuestion />
        {isMessageWriteVisible ? (
          <>
            <MessagePaperSelect />
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
