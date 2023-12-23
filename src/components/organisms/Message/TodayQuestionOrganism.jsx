import React from "react";
import styled from "styled-components";
import {
  PlaceCenter,
  PlaceLeftRow,
  PlaceLeftColumn,
} from "../../../styles/utils";

const TodayQuestionContainer = styled(PlaceLeftColumn)`
  width: 100%;
  height: auto;
  gap: 6px;
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

const today = new Date();
const todayDate = today.getDate();
// const todayDate = 18; // 테스트용

const TodayQuestionText = ({ nickname, todayDate }) => {
  const receiverNickname = nickname;

  // console.log(`todayDate: ${todayDate}, nickname: ${receiverNickname}`); // 테스트용

  switch (todayDate) {
    case 25:
      return <p>{receiverNickname} 님의 매력은 무엇인가요?</p>;
    case 26:
      return <p>{receiverNickname} 님의 첫인상은 어땠나요?</p>;
    case 27:
      return <p>{receiverNickname} 님과의 특별한 추억이 있나요?</p>;
    case 28:
      return <p>{receiverNickname} 님에게 감동받았던 에피소드가 있나요?</p>;
    case 29:
      return <p>{receiverNickname} 님을 떠올렸을 때 생각나는 색깔은?</p>;
    case 30:
      return <p>나만 아는 {receiverNickname} 님의 반전스러운 특징이나 모습?</p>;
    case 31:
      return (
        <p>
          크리스마스와 곧 맞이할 새해를 기념해서 {receiverNickname} 님에게
          하고싶은 말을 남겨주세요 :)
        </p>
      );
    default:
      return <p>다음 이벤트 질문을 만들고 있어요! </p>;
  }
};

const TodayQuestion = ({ nickname }) => {
  const formattedToday = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;
  const questionNum =
    todayDate === 25
      ? "첫 번째"
      : todayDate === 26
      ? "두 번째"
      : todayDate === 27
      ? "세 번째"
      : todayDate === 28
      ? "네 번째"
      : todayDate === 29
      ? "다섯 번째"
      : todayDate === 30
      ? "여섯 번째"
      : todayDate === 31
      ? "마지막"
      : "도착하고 있는 ";

  return (
    <TodayQuestionContainer>
      <TodayAndQuestionNum>
        <Today>{formattedToday}</Today>
        <QuestionNum>#{questionNum} 질문</QuestionNum>
      </TodayAndQuestionNum>
      <TodayQuestionText nickname={nickname} />
    </TodayQuestionContainer>
  );
};

export default TodayQuestion;
