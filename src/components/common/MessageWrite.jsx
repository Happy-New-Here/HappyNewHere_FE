// 편지 쓰는 칸
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { setMessageInput } from "../../store/messageInputSlice";
import { MessagePapersSRC } from "../../utils/MessagePapersSRC";
import cancelIcon from "../../assets/cancelIcon.svg";
import styled from "styled-components";
import {
  StyledMessage,
  MessageContainer,
  CancelIcon,
  ReceiverOrSender,
  MessageText,
} from "../../styles/messageStyles";

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  resize: none;
  overflow: auto;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.fontColor};

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
        background-color: #C0C0C0; /* Scrollbar color */
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

  const receiverNickname = ""; // 카카오톡 닉네임
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

  const handleMessageInputChange = (e) => {
    dispatch(setMessageInput(e.target.value));
  };
  const today = new Date();
  const day = today.getDay(); // 일요일: 0 ~ 토요일: 6
  return (
    <StyledMessage>
      <CancelIcon src={cancelIcon} alt="cancelIcon" onClick={handleCancelClick} />

      <MessageContainer ref={messageContainerRef} day={day} paperNum={selectedPaperNum}>
        <MessageText>
          <ReceiverOrSender>To. {receiverNickname}</ReceiverOrSender>
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
