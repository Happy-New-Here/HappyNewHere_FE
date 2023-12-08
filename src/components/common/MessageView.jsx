// 편지 보여주는 칸
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MessagePaperSRC, { MessageFontColor } from "../../utils/MessagePaperSRC";
import cancelIcon from "../../assets/cancelIcon.svg";
import styled from "styled-components";
import {
  StyledMessage,
  MessageContainer,
  CancelIcon,
  ReceiverOrSender,
  MessageText,
} from "../../styles/messageStyles";

const TextArea = styled.p`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  resize: none;
  overflow: scroll;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.fontColor};
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

  const senderNickname = ""; // 카카오톡 닉네임
  const dispatch = useDispatch();
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);

  const handleCancelClick = () => {
    //   dispatch(setIsMessageWriteVisible(false));
    // 메시지뷰어 꺼지고 메시지리스트 다시 나오게
  };

  return (
    <StyledMessage>
      <CancelIcon src={cancelIcon} alt="cancelIcon" onClick={handleCancelClick} />

      <MessageContainer ref={messageContainerRef} paperNum={selectedPaperNum}>
        <MessageText fontColor={MessageFontColor(selectedPaperNum)}>
          <TextArea fontColor={MessageFontColor(selectedPaperNum)}>
            안녕. <br /> 새해에는 좋은 일이 생기게 해주세요. <br /> Happy New Year!
          </TextArea>
          <ReceiverOrSender>From. {senderNickname}</ReceiverOrSender>
        </MessageText>
      </MessageContainer>
    </StyledMessage>
  );
};

export default Message;
