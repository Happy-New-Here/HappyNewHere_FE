import React from "react";
import { useSelector } from "react-redux";
import Header from "../common/Header";
import TodayQuestionOrganism from "../organisms/Message/TodayQuestionOrganism";
import MessageWriteButtonOrganism from "../organisms/Message/MessageWriteButtonOrganism";
import MessagePaperThumbnailOrganism from "../organisms/Message/MessagePaperThumbnailOrganism";
import MessageWriteOrganism from "../organisms/Message/MessageWriteOrganism";
import Footer from "../common/Footer";
import {
  ResponsiveLayout,
  Leftside,
  Center,
  Rightside,
  ContentLayout,
} from "../../styles/utils";

const MessageWriteTemplate = () => {
  const isMessageWriteVisible = useSelector((state) => state.isMessageWriteVisible);

  return (
    <ResponsiveLayout>
      {window.innerWidth >= 768 ? (
        <>
          <Leftside>
            <Header />
            <Footer />
          </Leftside>
          <ContentLayout>
            <Center>
              {/* <TodayQuestionOrganism /> */}
              {isMessageWriteVisible ? (
                <>
                  <MessagePaperThumbnailOrganism />
                  <MessageWriteOrganism />
                </>
              ) : (
                <>
                  <TodayQuestionOrganism />
                  <MessageWriteButtonOrganism />
                </>
              )}
            </Center>
            <Rightside>
              <div>프로필과 상태메시지</div>
              {isMessageWriteVisible ? <TodayQuestionOrganism /> : <></>}
            </Rightside>
          </ContentLayout>
        </>
      ) : (
        <>
          <Header />
          <ContentLayout>
            <div style={{ width: "176px" }}>프로필과 상태메시지</div>
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
          <Footer />
        </>
      )}
    </ResponsiveLayout>
  );
};

export default MessageWriteTemplate;
