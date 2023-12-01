// 편지 쓰거나 보여주는 칸
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessageInput } from "../../store/messageInputSlice";
import styled from "styled-components";

const PlaceCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 편지지 영역
const MessageContainer = styled(PlaceCenter)`
  width: 100%;
  background-color: #eeeeee;
  background-image: ${(props) => `url(${messagePaperSRC[props.backgroundImage]})`};
  margin: 32px 0px 16px;
  background-size: 100% 100%;
  padding: 44px 24px;
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
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  resize: none;
  overflow: scroll;
`;

const messagePaperSRC = {
  1: "src/assets/MessagePaperSample.png",
  2: "src/assets/MessagePaperSample.png",
  3: "src/assets/MessagePaperSample.png",
};

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

  const handleMessageInputChange = (e) => {
    dispatch(setMessageInput(e.target.value));

    // 메시지 value 입력되었는지 체크 -> send 버튼 활성화
  };

  return (
    <MessageContainer ref={messageContainerRef} backgroundImage={selectedPaperNum}>
      <MessageText>
        <Receiver>To. {receiverNickname}</Receiver>
        <TextArea
          placeholder="여기에 메시지를 입력하세요"
          value={messageInput}
          onChange={handleMessageInputChange}
        />
      </MessageText>
    </MessageContainer>
  );
};

export default Message;
