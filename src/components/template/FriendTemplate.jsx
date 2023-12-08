import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useSpring, animated } from "react-spring"; // 애니메이션

const MessageWriteTemplate = () => {
  const isMessageWriteVisible = useSelector((state) => state.isMessageWriteVisible);
  // const animationProps = useSpring({
  //   opacity: isMessageWriteVisible ? 1 : 0,
  //   config: { duration: 300 },
  // });
  const animationProps = useSpring({
    transform: isMessageWriteVisible ? "translateX(0%)" : "translateX(-20%)",
    config: { duration: 300 }, // 속도
  });

  return (
    <ResponsiveLayout>
      {window.innerWidth >= 768 ? (
        <>
          <Leftside>
            <Header />
            <Footer currentPage="home"/>
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
              {isMessageWriteVisible ? (
                <animated.div style={animationProps}>
                  <TodayQuestionOrganism />
                </animated.div>
              ) : (
                <></>
              )}
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
          <Footer currentPage="home"/>
        </>
      )}
    </ResponsiveLayout>
  );
};

export default MessageWriteTemplate;
