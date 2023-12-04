// 편지 쓰거나 보여주는 칸
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { setMessageInput } from "../../store/messageInputSlice";
import messagePaperSRC, { messageFontColor } from "../../utils/messagePaperSRC";
import cancelIcon from "../../assets/cancelIcon.svg";
import styled from "styled-components";
import { PlaceCenter, PlaceTopColumn } from "../../styles/utils";

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

// 편지지 영역
const MessageContainer = styled(PlaceTopColumn)`
  width: 100%;
  background: ${(props) => `url(${messagePaperSRC[props.paperNum]})`};
  background-size: 100% 100%;
  margin: 0px 0px 16px;
  padding: 44px 24px;
  border-radius: 5px;
`;

const CancelIcon = styled.img`
  width: 8px;
  height: 8px;
  position: relative;
  top: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const Receiver = styled.p`
  font-weight: bold;
`;

// 사용자 입력 받을 메시지 내용
const MessageText = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  color: ${(props) => props.fontColor};
`;

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
          <Receiver>To. {receiverNickname}</Receiver>
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
