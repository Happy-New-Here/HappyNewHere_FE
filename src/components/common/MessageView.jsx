// 편지 보여주는 칸
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

const TextArea = styled.p`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  resize: none;
  overflow: auto;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.fontColor};

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

const MessageView = ({
  context,
  senderNickname,
  paperNum,
  anonymous,
  dayColor,
}) => {
  // MessageContainer height width에 따라 동적 적용
  const messageContainerRef = useRef(null);
  // console.log("test: ", context, senderNickname, paperNum, anonymous, dayColor);

  const displayName = anonymous ? "익명의 산타" : senderNickname;
  const effectiveDayColor = dayColor || 0;

  useEffect(() => {
    const messageContainer = messageContainerRef.current;
    const width = messageContainer.offsetWidth;
    const height = width;
    messageContainer.style.height = `${height}px`;
  }, []);

  const dispatch = useDispatch();

  const handleCancelClick = () => {
    //   dispatch(setIsMessageWriteVisible(false));
    // 메시지뷰어 꺼지고 메시지리스트 다시 나오게
  };

  return (
    <StyledMessage>
      <CancelIcon
        src={cancelIcon}
        alt="cancelIcon"
        onClick={handleCancelClick}
      />

      <MessageContainer
        ref={messageContainerRef}
        day={effectiveDayColor}
        paperNum={paperNum}
      >
        <MessageText fontColor="#000000">
          <TextArea fontColor="#000000">{context}</TextArea>
          <ReceiverOrSender>From. {displayName}</ReceiverOrSender>
        </MessageText>
      </MessageContainer>
    </StyledMessage>
  );
};

export default MessageView;
