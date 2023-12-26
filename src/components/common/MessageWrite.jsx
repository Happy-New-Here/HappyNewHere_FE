// 편지 쓰는 칸
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { setMessageInput } from "../../store/messageInputSlice";
import { MessagePapersSRC, MessagePapers } from "../../utils/MessagePapersSRC";
import cancelIcon from "../../assets/cancelIcon.svg";
import styled from "styled-components";
import {
  StyledMessage,
  MessageContainer,
  CancelIcon,
  ReceiverOrSender,
  MessageText,
} from "../../styles/messageStyles";

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

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  resize: none;
  overflow: auto;
  font-size: 16px;
  text-align: center;
  // color: ${(props) => props.fontColor};

  &::placeholder {
    text-align: center;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 8px; /* Width of scrollbar */
    height: 0px; /* Set to 0 for horizontal scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c0c0c0; /* Scrollbar color */
    border-radius: 4px; /* Round the corners of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of scrollbar track */
  }
`;

const Message = () => {
  // MessageContainer height width에 따라 동적 적용
  const messageContainerRef = useRef(null);

  useEffect(() => {
    const messageContainer = messageContainerRef.current;
    const width = messageContainer.offsetWidth;
    const height = width;
    messageContainer.style.height = `${height}px`;
  }, []);

  // const sender = useSelector((state) => state.user.nickname);
  const receiver = useSelector((state) => state.searchUser.nickname);
  const dispatch = useDispatch();
  const messageInput = useSelector((state) => state.messageInput);
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);

  const handleCancelClick = () => {
    if (messageInput) {
      const isConfirmed = confirm(
        "메시지 쓰기를 취소하시겠어요? 작성하신 메시지는 저장되지 않아요. "
      );

      if (isConfirmed) {
        dispatch(setIsMessageWriteVisible(false));
        dispatch(setMessageInput(""));
      }
    } else {
      dispatch(setIsMessageWriteVisible(false));
    }
  };

  // 확인용
  // useEffect(() => {
  //   console.log(`messageInput: ${messageInput}`);
  // }, [messageInput]);

  const handleMessageInputChange = (e) => {
    dispatch(setMessageInput(e.target.value));
  };

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

  const imageSRC = MessagePapers[dayColor]?.[selectedPaperNum] || NavyPuppy; // 기본값으로 NavyPuppy

  return (
    <StyledMessage>
      <CancelIcon src={cancelIcon} alt="cancelIcon" onClick={handleCancelClick} />

      <MessageContainer
        ref={messageContainerRef}
        // day={day}
        // paperNum={selectedPaperNum}
        src={imageSRC}
      >
        <MessageText>
          <ReceiverOrSender>To. {receiver}</ReceiverOrSender>
          <TextArea
            placeholder="여기에 메시지를 입력하세요"
            value={messageInput}
            onChange={handleMessageInputChange}
          />
        </MessageText>
      </MessageContainer>
    </StyledMessage>
  );
};

export default Message;
