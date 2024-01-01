import React, { useState } from "react";
import styled from "styled-components";
import {
  MessageThumbnailsSRC,
  MessagePapers,
} from "../../utils/MessagePapersSRC";
import { PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";

import NavyPuppy from "../../assets/MessagePapers/Navy/Puppy.svg";
import NavySanta from "../../assets/MessagePapers/Navy/Santa.svg";
import NavyTogether from "../../assets/MessagePapers/Navy/Together.svg";
import NavyTown from "../../assets/MessagePapers/Navy/Town.svg";

import WhitePuppy from "../../assets/MessagePapers/White/Puppy.svg";
import WhiteSanta from "../../assets/MessagePapers/White/Santa.svg";
import WhiteTogether from "../../assets/MessagePapers/White/Together.svg";
import WhiteTown from "../../assets/MessagePapers/White/Town.svg";

import GreenPuppy from "../../assets/MessagePapers/Green/Puppy.svg";
import GreenSanta from "../../assets/MessagePapers/Green/Santa.svg";
import GreenTogether from "../../assets/MessagePapers/Green/Together.svg";
import GreenTown from "../../assets/MessagePapers/Green/Town.svg";

import BrownPuppy from "../../assets/MessagePapers/Brown/Puppy.svg";
import BrownSanta from "../../assets/MessagePapers/Brown/Santa.svg";
import BrownTogether from "../../assets/MessagePapers/Brown/Together.svg";
import BrownTown from "../../assets/MessagePapers/Brown/Town.svg";

import PinkPuppy from "../../assets/MessagePapers/Pink/Puppy.svg";
import PinkSanta from "../../assets/MessagePapers/Pink/Santa.svg";
import PinkTogether from "../../assets/MessagePapers/Pink/Together.svg";
import PinkTown from "../../assets/MessagePapers/Pink/Town.svg";

import YellowPuppy from "../../assets/MessagePapers/Yellow/Puppy.svg";
import YellowSanta from "../../assets/MessagePapers/Yellow/Santa.svg";
import YellowTogether from "../../assets/MessagePapers/Yellow/Together.svg";
import YellowTown from "../../assets/MessagePapers/Yellow/Town.svg";

import RedPuppy from "../../assets/MessagePapers/Red/Puppy.svg";
import RedSanta from "../../assets/MessagePapers/Red/Santa.svg";
import RedTogether from "../../assets/MessagePapers/Red/Together.svg";
import RedTown from "../../assets/MessagePapers/Red/Town.svg";

const StyledMessageThumbnail = styled(PlaceLeftRow)`
  width: 100%;
  height: 33px;
  padding: 0px 16px;
  border-radius: 5px;
  font-size: 12px;
  background: ${(props) => `url(${props.src})`} center/cover;
  background-size: cover;
  background-position: right;

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

  const imageSRC = MessagePapers[dayColor]?.[paperNum] || NavyPuppy; // 기본값으로 NavyPuppy

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
