import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "../../common/Message";
import { Button } from "../../common/Button";
import { BASE_URL } from "../../../utils/URL";
import axios from "axios";
import sendIcon from "../../../assets/sendIcon.svg";
import styled from "styled-components";

const CheckboxAndSendButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MessageWriteOrganism = () => {
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);
  const messageInput = useSelector((state) => state.messageInput);
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
    paperNum: selectedPaperNum,
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
    <div>
      <Message />
      <CheckboxAndSendButton>
        <form>
          <label>익명으로 보내기 </label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckAnonymous} />
        </form>
        <Button
          type="primary"
          width="88px"
          height="16px"
          fontSize="12px"
          onClick={handleSendButton}
        >
          메시지 보내기&nbsp;
          <img src={sendIcon} alt="sendIcon" />
        </Button>
      </CheckboxAndSendButton>
    </div>
  );
};

export default MessageWriteOrganism;
