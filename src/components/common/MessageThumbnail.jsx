import React, { useState } from "react";
import styled from "styled-components";
import { MessageThumbnails } from "../../utils/MessagePapersSRC";
import { PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";

const StyledMessageThumbnail = styled(PlaceLeftRow)`
  width: 100%;
  height: 33px;
  padding: 0px 16px;
  border-radius: 5px;
  font-size: 12px;
  background: ${(props) => `url(${props.src})`} right center/cover;
  // background-position: 가로 right 세로 center / background-size: cover

  /* active prop이 true일 때 그림자 스타일을 추가 */
  ${(props) =>
    props.active &&
    `
    background-color: rgba(128, 128, 128, 0.3); // 회색, Alpha 값 0.3로 설정
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // 그림자 스타일
  `}

  @media (min-width: 768px) {
    padding: 0px 8px;
  }
`;

const TextArea = styled(PlaceLeftRow)`
  width: 70%;
  height: 48%;
  padding-left: 4px;
  background-color: rgb(255, 255, 255, 0.4);
  border-radius: 2px;
  box-shadow: 0 0 4px rgb(255, 255, 255, 0.8);

  @media (min-width: 768px) {
  }
`;

const MessageThumbnail = (props) => {
  const { day, paperNum, sender, onClick, originalIndex, active } = props;
  // console.log(active, originalIndex);

  // 요일에 따른 색상 매핑
  const dayColorMapping = {
    0: "Red", // 일
    1: "Navy", // 월
    2: "White", // 화
    3: "Green", // 수
    4: "Brown", // 목
    5: "Pink", // 금
    6: "Yellow", // 토
  };
  const dayColor = dayColorMapping[day];

  const imageSRC = MessageThumbnails[dayColor]?.[paperNum] || MessageThumbnails["Navy"][0]; // 기본값으로 NavyPuppy

  const handleClick = () => {
    onClick();
  };

  return (
    <StyledMessageThumbnail
      // day={day}
      // paperNum={paperNum}
      src={imageSRC}
      onClick={handleClick}
      active={active}
    >
      <TextArea>
        <SmallText fontSize="12px" fontWeight="600">
          From.&nbsp;
        </SmallText>
        <SmallText fontSize="12px">{sender}</SmallText>
      </TextArea>
    </StyledMessageThumbnail>
  );
};

export default MessageThumbnail;
