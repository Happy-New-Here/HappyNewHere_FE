// 메시지 작성 칸 + 보내기 버튼
// sendButton 누르면 post 요청
// params 전역으로 관리하기

import { React, useEffect, useState } from "react";
import { BASE_URL } from "../../utils/URL";
import axios from "axios";
import Message, { messageInput } from "../common/Message";
import { selectedPaperNum } from "../organisms/MessagePaperSelect";
import sendIcon from "../../assets/sendIcon.svg";

const MessageWriteTemplate = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCheckAnonymous = () => {
    setIsChecked(!isChecked);
  };

  const handleSendButton = () => {
    setIsSent(true);
  };

  let paramsToSend = {
    context: messageInput,
    int: selectedPaperNum,
    // Header Authorization
    anonymous: isChecked,
  };

  useEffect(() => {
    axios
      .post(`${BASE_URL}/message/create`, { paramsToSend })
      .then((response) => {
        console.log(`Your message have been sent successfuly.`);
      })
      .catch((error) => {
        console.error(`An error occured on sending the message.`);
      });
  }, [isSent]);

  return (
    <>
      <Message />

      <form>
        <label>`익명으로 보내기 `</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckAnonymous}
        />
      </form>
      <button onChange={handleSendButton}>
        메시지 보내기
        <img src={sendIcon} alt="sendIcon" />
      </button>
    </>
  );
};

export default MessageWriteTemplate;
