// 편지 쓰거나 보여주는 칸
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessageInput } from "../../store/messageInputSlice";
import styled from "styled-components";
// import { selectedPaperNum } from "../organisms/MessagePaperSelect";

const PlaceCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 편지지 영역
const MessageContainer = styled.div`
  width: 296px;
  height: 296px;
  ${PlaceCenter};
  background-image: ${(props) =>
    `url(${messagePaperSRC[props.backgroundImage]})`};
  margin: 32px 32px 16px;
`;

const Receiver = styled.div`
  ${PlaceCenter};
  font-weight: bold;
`;

// 사용자 입력 받을 메시지 내용
const MessageText = styled.form`
  width: 248px;
  height: 251px;
  overflow-y: scroll;
`;

const Message = () => {
  const dispatch = useDispatch();
  // const [messageInput, setMessageInput] = useState(null);
  // const [backgroundImage, setBackgroundImage] = useState(null);
  const messageInput = useSelector((state) => state.messageInput);
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);

  const messagePaperSRC = {
    1: "src/assets/MessagePaperSample.png",
    2: "src/assets/MessagePaperSample.png",
    3: "src/assets/MessagePaperSample.png",
  };

  const handleMessageInputChange = (e) => {
    // setMessageInput(e.target.value);
    dispatch(setMessageInput(e.target.value));

    // 메시지 value 입력되었는지 체크 -> send 버튼 활성화
  };

  return (
    <MessageContainer backgroundImage={selectedPaperNum}>
      <MessageText>
        <Receiver>`To. 카카오톡 닉네임`</Receiver>
        <input
          type="text"
          placeholder="여기에 메시지를 입력하세요"
          value={messageInput}
          onChange={handleMessageInputChange}
        />
      </MessageText>
    </MessageContainer>
  );
};

export default Message;
