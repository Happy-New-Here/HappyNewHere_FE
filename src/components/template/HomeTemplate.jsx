import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/currentPageSlice";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Profile from "../common/Profile";
import GiftBox from "../common/GiftBox";
import { Calendar } from "../common/Calendar";
import MessageList from "../organisms/Message/MessageList";
import MessageViewOrganism from "../organisms/Message/MessageViewOrganism";
import {
  PlaceCenter,
  ResponsiveLayout,
  ContentLayout,
  Leftside,
  Center,
  Rightside,
} from "../../styles/utils";
import { SmallText } from "../../styles/text";
import styled from "styled-components";

const StyledBeforeOpen = styled(PlaceCenter)`
  flex-direction: column;
  height: 100%;

  // @media (min-width: 768px) {
  //   height: auto;
  // }
`;

const HomeTemplate = () => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  let weekDates = Calendar.getWeekDates(25); // 이벤트 시작날짜 설정
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
  // 최초 마운트시에(만) setCurrentPage를 디스패치
  useEffect(() => {
    dispatch(setCurrentPage("/"));
  }, [dispatch]);

  // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  // 메시지 읽기 오픈일 설정
  const targetDate = new Date("2023-12-18"); // 오픈일
  const today = new Date(); // 오늘

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleShareLink = () => {
    // 내 메시지함 링크를 클립보드에 복사. 'navigator.clipboard' API 사용
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        // console.log(`링크 복사 성공: ${url}`);
        alert(`링크가 클립보드에 복사되었어요. 이제 링크를 원하는 곳에 붙여넣을 수 있어요.`);
      })
      .catch((err) => {
        console.error("링크 복사 실패:", err);
      });
  };

  // 오픈일 이전
  const BeforeOpen = () => {
    return (
      <StyledBeforeOpen>
        <GiftBox />
        <SmallText fontSize="20px" fontWeight="600" lineHeight="48px" textAlign="center">
          메시지함은 1월 1일에 열 수 있어요! <br />
        </SmallText>
        <SmallText
          fontSize="16px"
          color="#9A0501"
          lineHeight="24px"
          textAlign="center"
          cursor="pointer"
          onClick={handleShareLink}
        >
          친구들에게 내 메시지함 링크 공유하기
        </SmallText>
      </StyledBeforeOpen>
    );
  };

  // 오픈일 이후
  const AfterOpen = () => {
    return (
      <>
        {selectedDate && (
          <div>
            {/* 선택한 날짜: {selectedDate.toDateString()} */}
            {/* 선택한 날짜에 따른 메시지 목록 또는 내용을 여기에 표시 */}
          </div>
        )}
        <MessageList />
        {/* <MessageViewOrganism /> */}
      </>
    );
  };

  return (
    <ResponsiveLayout>
      {isPc ? (
        <>
          <Leftside>
            <Header />
            <Footer currentPage="home" isPc={isPc} />
          </Leftside>
          <ContentLayout>
            <Center>
              <Calendar.wrapper>
                {weekDates.map((date, index) => (
                  <Calendar.item
                    key={index}
                    day={date.getDay()}
                    date={date.getDate()}
                    onClick={() => handleDateClick(date)}
                  />
                ))}
              </Calendar.wrapper>
            </Center>

            <Rightside>
              <Profile />
              {/* 오픈일 이후 메시지 목록 공개 */}
              {today > targetDate ? <AfterOpen /> : <BeforeOpen />}
            </Rightside>
          </ContentLayout>
        </>
      ) : (
        <>
          <Header />
          <ContentLayout>
            <Profile />
            <Calendar.wrapper>
              {weekDates.map((date, index) => (
                <Calendar.item
                  key={index}
                  day={date.getDay()}
                  date={date.getDate()}
                  onClick={() => handleDateClick(date)}
                />
              ))}
            </Calendar.wrapper>

            {/* 오픈일 이후 메시지 목록 공개 */}
            {today > targetDate ? <AfterOpen /> : <BeforeOpen />}
          </ContentLayout>

          <Footer currentPage="home" isPc={isPc} />
        </>
      )}
    </ResponsiveLayout>
  );
};

export default HomeTemplate;