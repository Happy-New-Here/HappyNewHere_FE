// 편지 쓰는 칸
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { setMessageInput } from "../../store/messageInputSlice";
import messagePaperSRC, { messageFontColor } from "../../utils/messagePaperSRC";
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
  overflow: scroll;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.fontColor};

  &::placeholder {
    text-align: center;
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
    const isConfirmed = confirm("메시지 작성을 취소하시겠어요?");

    if (isConfirmed) {
      dispatch(setIsMessageWriteVisible(false));
    }
  };

  const handleMessageInputChange = (e) => {
    dispatch(setMessageInput(e.target.value));
  };

  return (
    <StyledMessage>
      <CancelIcon src={cancelIcon} alt="cancelIcon" onClick={handleCancelClick} />

      <MessageContainer ref={messageContainerRef} paperNum={selectedPaperNum}>
        <MessageText fontColor={messageFontColor(selectedPaperNum)}>
          <ReceiverOrSender>To. {receiverNickname}</ReceiverOrSender>
          <TextArea
            placeholder="여기에 메시지를 입력하세요"
            value={messageInput}
            fontColor={messageFontColor(selectedPaperNum)}
            onChange={handleMessageInputChange}
          />
        </MessageText>
      </MessageContainer>
    </StyledMessage>
  );
};

export default Message;
