import React from "react";
import styled from "styled-components";
import { PlaceCenter, PlaceLeftRow, PlaceLeftColumn } from "../../../styles/utils";

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

const TodayQuestionText = ({ nickname }) => {
  const receiverNickname = nickname;

  // console.log(`todayDate: ${todayDate}, nickname: ${receiverNickname}`); // 테스트용

  switch (todayDate) {
    case 18:
      return <p>{receiverNickname} 님의 매력은 무엇인가요?</p>;
    case 19:
      return <p>{receiverNickname} 님의 첫인상은 어땠나요?</p>;
    case 20:
      return <p>{receiverNickname} 님과의 특별한 추억이 있나요?</p>;
    case 21:
      return <p>{receiverNickname} 님에게 감동받았던 에피소드가 있나요?</p>;
    case 22:
      return <p>{receiverNickname} 님을 떠올렸을 때 생각나는 색깔은?</p>;
    case 23:
      return <p>나만 아는 {receiverNickname} 님의 반전스러운 특징이나 모습?</p>;
    case 24:
      return (
        <p>
          크리스마스와 곧 맞이할 새해를 기념해서 {receiverNickname} 님에게 하고싶은 말을
          남겨주세요 :)
        </p>
      );
    default:
      return <p>커밍 쑨... by {receiverNickname}</p>;
  }
};

const TodayQuestion = ({ nickname }) => {
  const formattedToday = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
  const questionNum =
    todayDate === 18
      ? "첫 번째"
      : todayDate === 19
        ? "두 번째"
        : todayDate === 20
          ? "세 번째"
          : todayDate === 21
            ? "네 번째"
            : todayDate === 22
              ? "다섯 번째"
              : todayDate === 23
                ? "여섯 번째"
                : todayDate === 24
                  ? "마지막"
                  : "몰랏";

  return (
    <TodayQuestionContainer>
      <TodayAndQuestionNum>
        <Today>{formattedToday}</Today>
        <QuestionNum>#{questionNum} 질문</QuestionNum>
      </TodayAndQuestionNum>
      <TodayQuestionText nickname={nickname}/>
    </TodayQuestionContainer>
  );
};

export default TodayQuestion;
