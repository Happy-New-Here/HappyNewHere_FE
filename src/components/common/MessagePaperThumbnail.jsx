// 편지지 선택 시 보여줄 편지지 썸네일 한 개
import React from "react";
import styled from "styled-components";
// import { MessagePapersSRC, MessagePapers } from "../../utils/MessagePapersSRC";

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

const StyledMessagePaperThumbnail = styled.img`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 5px;
  padding: 0px 0px;
  cursor: pointer;

  /* Hover 효과: 약간 위로 이동 */
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-4px);
  }

  ${(props) =>
    props.isSelected &&
    `
    transform: translateY(-4px);
    z-index: 1;
  `}

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;

    ${(props) =>
      props.isSelected &&
      `
      transform: translateY(-4px);
      z-index: 1;
    `}
  }
`;

const MessagePaperThumbnail = ({ paperNum, isSelected, onSelect }) => {
  const today = new Date();
  const day = today.getDay(); // 일요일: 0 ~ 토요일: 6
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

  const MessagePapersSRC = {
    Navy: { 0: NavyPuppy, 1: NavySanta, 2: NavyTogether, 3: NavyTown },
    Brown: { 0: BrownPuppy, 1: BrownSanta, 2: BrownTogether, 3: BrownTown },
    Green: { 0: GreenPuppy, 1: GreenSanta, 2: GreenTogether, 3: GreenTown },
    Pink: { 0: PinkPuppy, 1: PinkSanta, 2: PinkTogether, 3: PinkTown },
    Red: { 0: RedPuppy, 1: RedSanta, 2: RedTogether, 3: RedTown },
    White: { 0: WhitePuppy, 1: WhiteSanta, 2: WhiteTogether, 3: WhiteTown },
    Yellow: {
      0: YellowPuppy,
      1: YellowSanta,
      2: YellowTogether,
      3: YellowTown,
    },
  };
  const imageSRC = MessagePapersSRC[dayColor]?.[paperNum] || NavyPuppy; // 기본값으로 NavyPuppy

  const handlePaperChange = () => {
    onSelect(paperNum); // 부모 컴포넌트 MessagePaperSelect로 전달
  };

  return (
    <StyledMessagePaperThumbnail
      // day={day}
      // paperNum={paperNum}
      src={imageSRC}
      alt="Message Paper"
      isSelected={isSelected}
      onClick={handlePaperChange}
    />
  );
};

export default MessagePaperThumbnail;
