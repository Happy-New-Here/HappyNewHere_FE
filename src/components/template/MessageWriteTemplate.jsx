import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessagePaperSelect from "../organisms/MessagePaperSelect";
import Message from "../common/Message";
import { BASE_URL } from "../../utils/URL";
import axios from "axios";
import sendIcon from "../../assets/sendIcon.svg";

const MessageWriteTemplate = () => {
  const messageInput = useSelector((state) => state.messageInput);
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);
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
      .post(`${BASE_URL}/message/create`, paramsToSend)
      .then((response) => {
        console.log(`Your message has been sent successfuly.`);
      })
      .catch((error) => {
        console.error(`An error occured while sending the message.`);
      });
  }, [isSent]);

  return (
    <>
      <MessagePaperSelect />

      <Message />

      <form>
        <label>`익명으로 보내기 `</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckAnonymous}
        />
      </form>
      <button onClick={handleSendButton}>
        메시지 보내기
        <img src={sendIcon} alt="sendIcon" />
      </button>
    </>
  );
};

export default MessageWriteTemplate;
