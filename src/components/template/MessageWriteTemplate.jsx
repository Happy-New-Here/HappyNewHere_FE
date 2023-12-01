import React from "react";
import TodayQuestion from "../organisms/Message/TodayQuestionOrganism";
import MessagePaperSelect from "../organisms/Message/MessagePaperThumbnailOrganism";
import MessageWriteOrganism from "../organisms/Message/MessageWriteOrganism";
import styled from "styled-components";

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: auto;
  gap: 32px;
  padding: 0px 32px;

  @media (min-width: 768px) {
    width: 322px;
  }
`;

const MessageWriteTemplate = () => {
  return (
    <>
      <div>프로필과 상태메시지</div>
      <ContentLayout>
        <TodayQuestion />
        <MessagePaperSelect />
        <MessageWriteOrganism />
      </ContentLayout>
    </>
  );
};

export default MessageWriteTemplate;
