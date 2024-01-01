import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PlaceCenter, PlaceLeftRow, PlaceLeftColumn } from "../../../styles/utils";

const TodayQuestionContainer = styled(PlaceLeftColumn)`
  width: 100%;
  height: auto;
  gap: 6px;
  margin-bottom: 1rem;
`;

const TodayAndQuestionNum = styled(PlaceLeftRow)`
  gap: 10px;
`;

const Today = styled.span`
  color: #959595;
  font-size: 12px;
`;

const QuestionNum = styled.span`
  color: #9a0501;
  font-size: 12px;
`;

const calculateDate = (selectedDateForm, isTest = false, testDate = "2024-01-01") => {
  const eventStartDate = new Date(2024, 0, 1); // 이벤트 시작 날짜<< 2024,0,1 여기 수정해야함

  let currentDate;
  if (isTest) {
    currentDate = new Date(testDate);
  } else {
    currentDate = new Date();
  }

  // 이벤트 시작 날짜 이후인 경우, selectedDate를 반환
  if (currentDate >= eventStartDate && selectedDateForm) {
    return selectedDateForm; // selectedDate가 이미 날짜 객체인 경우 그대로 사용
  }

  // 그렇지 않은 경우, currentDate 반환
  return currentDate;
};

const TodayQuestionText = ({ nickname, selectedDateForm }) => {
  const isTest = false; // 테스트 모드 활성화
  const testDate = "2023-12-25"; // 테스트용 날짜 설정
  const useDate = calculateDate(selectedDateForm, isTest, testDate);
  const formattedToday = `${useDate.getFullYear()}.${
    useDate.getMonth() + 1
  }.${useDate.getDate()}`;
  const todayDate = useDate.getDate();
  // const receiverNickname = useSelector((state) => state.searchUser.nickname);
  const userNickname = useSelector((state) => state.user.nickname);

  const receiverNickname = userNickname ? userNickname : "OO";

  switch (todayDate) {
    case 25:
      return <p>{receiverNickname} 님의 매력이나 장점은 무엇인가요?</p>;
    case 26:
      return <p>{receiverNickname} 님의 첫인상은 어땠나요?</p>;
    case 27:
      return <p>{receiverNickname} 님과의 특별한 추억이 있나요?</p>;
    case 28:
      return <p>{receiverNickname} 님에게 감동받았던 에피소드가 있나요?</p>;
    case 29:
      return <p>{receiverNickname} 님을 떠올렸을 때 생각나는 색깔은?</p>;
    case 30:
      return <p>내가 아는 {receiverNickname} 님의 반전스러운 면?</p>;
    case 31:
      return (
        <p>곧 맞이할 새해를 기념해서 {receiverNickname} 님에게 하고싶은 말을 남겨주세요 :)</p>
      );
    default:
      return <p>장식을 눌러 도착한 메시지들을 열어보세요!</p>;
  }
};

const TodayQuestion = ({ nickname, selectedDateForm }) => {
  // console.log("nickname", nickname);
  const isTest = false; // 테스트 모드 활성화
  const testDate = "2023-12-25"; // 테스트용 날짜 설정
  const useDate = calculateDate(selectedDateForm, isTest, testDate);
  const formattedToday = `${useDate.getFullYear()}.${
    useDate.getMonth() + 1
  }.${useDate.getDate()}`;
  const todayDate = useDate.getDate();

  const questionNum =
    todayDate === 25
      ? "첫 번째 질문"
      : todayDate === 26
      ? "두 번째 질문"
      : todayDate === 27
      ? "세 번째 질문"
      : todayDate === 28
      ? "네 번째 질문"
      : todayDate === 29
      ? "다섯 번째 질문"
      : todayDate === 30
      ? "여섯 번째 질문"
      : todayDate === 31
      ? "마지막 질문"
      : "메시지 열어보기";

  return (
    <TodayQuestionContainer>
      <TodayAndQuestionNum>
        <Today>{formattedToday}</Today>
        <QuestionNum>#{questionNum}</QuestionNum>
      </TodayAndQuestionNum>
      <TodayQuestionText nickname={nickname} selectedDateForm={selectedDateForm} />
    </TodayQuestionContainer>
  );
};

export default TodayQuestion;
