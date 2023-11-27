// 메시지 작성 칸 + 보내기 버튼
// sendButton 누르면 post 요청
// params 전역으로 관리하기

import { React, useEffect, useState } from "react";
import { BASE_URL } from "../../utils/URL";
import axios from "axios";
import Message from "../common/Message";
import sendIcon from "../../assets/sendIcon.svg";

const MailWriteTemplate = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSendButton = () => {
    setIsSent = true;
  };

  let paramsToSend = {
    context: messageInput,
    int: paperNum,
    authorized: true, // Header Authorization
    anonymous: false,
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

      <button onChange={handleSendButton}>
        메시지 보내기
        <img src={sendIcon} alt="sendIcon" />
      </button>
    </>
  );
};

export default MailWriteTemplate;
