import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/currentPageSlice";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ChattingPageDeco from "../../assets/ChattingPageDeco.svg";
import styled from "styled-components";
import { SmallText } from "../../styles/text";
import { useMediaQuery } from "react-responsive";
import {
  ResponsiveLayoutPC,
  ResponsiveLayoutMobile,
  InsideLayoutPC,
  InsideLayoutMobile,
} from "../../styles/utils";

const ChattingInsideLayoutMobile = styled(InsideLayoutMobile)`
  justify-content: center;
  align-items: center;
`;

const ChattingInsideLayoutPC = styled(InsideLayoutPC)`
  justify-content: center;
  align-items: center;
`;

const StyledChattingPageDeco = styled.img`
  width: 180px;
  height: 180px;

  @media (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const ChattingTemplate = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
  // 최초 마운트시에(만) setCurrentPage를 디스패치
  useEffect(() => {
    dispatch(setCurrentPage("/auth/chatting"));
  }, [dispatch]);

  // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <>
      {/* 데탑창입니다. */}
      {isPc ? (
        <ResponsiveLayoutPC>
          <InsideLayoutPC>
            <Header />
            <Footer currentPage="chat" isPc={isPc} />
          </InsideLayoutPC>
          <ChattingInsideLayoutPC>
            <StyledChattingPageDeco src={ChattingPageDeco} alt="ChattingPageDeco" />
            <SmallText fontSize="20px" font-weight="600" margin="0 0 0 1rem">
              아직 지원되지 않는 기능입니다. <br />
            </SmallText>
            <SmallText fontSize="16px" margin="0 0 0 1rem">
              더 나은 서비스를 위해 조금만 기다려주세요!
            </SmallText>
          </ChattingInsideLayoutPC>
        </ResponsiveLayoutPC>
      ) : (
        <ResponsiveLayoutMobile>
          <Header />
          <ChattingInsideLayoutMobile>
            <StyledChattingPageDeco src={ChattingPageDeco} alt="ChattingPageDeco" />
            <SmallText fontSize="18px" font-weight="600" margin="0 0 0 1rem">
              아직 지원되지 않는 기능입니다.
            </SmallText>
            <SmallText fontSize="16px" margin="0 0 0 1rem">
              더 나은 서비스를 위해 조금만 기다려주세요!
            </SmallText>
          </ChattingInsideLayoutMobile>
          <Footer currentPage="chat" isPc={isPc} />
        </ResponsiveLayoutMobile>
      )}
    </>
  );
};

export default ChattingTemplate;
