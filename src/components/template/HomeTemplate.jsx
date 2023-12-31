import React, { useState, useEffect, useRef } from "react";
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
import MessageView from "../common/MessageView";
import {
  PlaceCenter,
  ResponsiveLayout,
  ContentLayout,
  Leftside,
  Center,
  Rightside,
  ResponsiveLayoutPC,
} from "../../styles/utils";
import { SmallText } from "../../styles/text";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../utils/URL";
import { setCalendar, setMessagesList, setOwner } from "../../store/calendar-slice";
import TodayQuestionOrganism from "../organisms/Message/TodayQuestionOrganism";
import { ContentLayoutMobile } from "../organisms/Home/ContentLayoutMobile";

const StyledBeforeOpen = styled(PlaceCenter)`
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const HomeTemplate = () => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  let weekDates = Calendar.getWeekDates(); // 이벤트 시작날짜 설정
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.user.nickname);
  const currentPage = useSelector((state) => state.currentPage);
  const userId = useSelector((state) => state.user.userId);
  const selectedMessageList = useSelector((state) => state.calendar.messagesList);
  const selectedMessageIndex = useSelector((state) => state.calendar.selectedMessageIndex);

  const urlRef = useRef(null);

  // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
  // 최초 마운트시에(만) setCurrentPage를 디스패치
  useEffect(() => {
    dispatch(setCurrentPage("/"));
  }, [dispatch]);

  // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  // 유저 메세지 전체 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/calender/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (response.data) {
          // 응답이 성공적으로 도착한 경우 데이터를 처리하고 Redux 상태를 업데이트
          const data = response.data;
          dispatch(setCalendar(data.calendar));
          dispatch(setMessagesList(data.messagesList));
          dispatch(setOwner(data.owner));
        } else {
          setTimeout(fetchData, 10000); // 10초 후에 다시 요청 (원하는 대기 시간으로 조절 가능)
        }
      } catch (error) {
        // 에러 처리
        // alert("편지가 오는 중입니다. 새로고침으로 받아보세요 !");
        console.error("Error fetching user messages:", error);
      }
    };
    // 컴포넌트가 마운트될 때 최초 요청 시작
    fetchData();
  }, [userId]);
  //selectedDate 는 임시로 넣어둬서 빼야함

  // 메시지 읽기 오픈일 설정
  const targetDate = new Date("2022-01-01"); // 오픈일
  const today = new Date(); // 오늘

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // console.log("selectedDate", selectedDate);
  // console.log("selectedMessageList", selectedMessageList);

  const handleShareLink = () => {
    // 현재 경로/userId를 클립보드에 복사.
    const urlToCopy = `http://happynewhere.kro.kr/${userId}`; // 공유할 링크

    // urlRef의 current 속성을 지정된 요소로 설정
    urlRef.current = document.createElement("textarea");
    urlRef.current.value = urlToCopy;
    document.body.appendChild(urlRef.current);

    // 요소의 내용을 선택하고 클립보드에 복사
    urlRef.current.select();
    document.execCommand("copy");

    // 요소를 삭제
    document.body.removeChild(urlRef.current);

    alert(`링크가 복사되었어요. 이제 링크를 원하는 곳에 붙여넣을 수 있어요.`);
  };

  // 오픈일 이전
  const BeforeOpen = (props) => {
    console.log(props.isPc);
    return (
      <StyledBeforeOpen>
        {!props.isPc && <GiftBox />}
        {props.isPc ? (
          <>
            <SmallText fontSize="18px" fontWeight="600" lineHeight="24px" textAlign="center">
              메시지함은 <br /> 1월 1일에 열 수 있어요!
            </SmallText>
            <SmallText
              fontSize="16px"
              color="#9A0501"
              lineHeight="24px"
              textAlign="center"
              cursor="pointer"
              onClick={handleShareLink}
            >
              친구들에게 내 메시지함 <br /> 링크 공유하기
            </SmallText>
          </>
        ) : (
          <>
            <SmallText fontSize="20px" fontWeight="600" lineHeight="40px" textAlign="center">
              메시지함은 1월 1일에 열 수 있어요!
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
          </>
        )}
      </StyledBeforeOpen>
    );
  };

  // 오픈일 이후
  const AfterOpen = () => {
    return (
      <>
        {selectedDate && <div></div>}

        <MessageList
          messageList={selectedMessageList}
          selectedDate={selectedDate}
          selectedDateForm={[selectedMessageIndex]?.day}
        />
      </>
    );
  };

  return (
    <>
      {isPc ? (
        <ResponsiveLayoutPC>
          <Leftside>
            <Header />
            <Footer />
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

              {today > targetDate ? (
                <TodayQuestionOrganism
                  nickname={nickname} // 현대 오류 발생
                  selectedDateForm={selectedDate}
                />
              ) : (
                <GiftBox />
              )}

              {selectedMessageIndex !== null ? <MessageViewOrganism /> : null}
            </Center>
          </ContentLayout>

          <Rightside>
            <Profile />
            {/* 오픈일 이후 메시지 목록 공개 */}
            {today > targetDate ? <AfterOpen /> : <BeforeOpen isPc={isPc} />}
          </Rightside>
        </ResponsiveLayoutPC>
      ) : (
        <ResponsiveLayout>
          <Header />
          <ContentLayoutMobile>
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
            <TodayQuestionOrganism
              nickname={nickname} // 현대 오류 발생
              selectedDateForm={selectedDate}
            />
            {/* 오픈일 이후 메시지 목록 공개 */}
            {today > targetDate ? <AfterOpen /> : <BeforeOpen isPc={isPc} />}
            {selectedMessageIndex !== null ? <MessageViewOrganism /> : null}
          </ContentLayoutMobile>

          <Footer />
        </ResponsiveLayout>
      )}
    </>
  );
};

export default HomeTemplate;
