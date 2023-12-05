import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../common/Button";
import sendIcon from "../../assets/sendIcon.svg";
import { BASE_URL } from "../../utils/URL";
import axios from "axios";

const MessageSendButton = () => {
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);
  const messageInput = useSelector((state) => state.messageInput);
  const isAnonymous = useSelector((state) => state.isAnonymous);
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleSendButton = () => {
    if (messageInput) {
      setIsSent(true);
    }
  };

  let paramsToSend = {
    context: messageInput,
    paperNum: selectedPaperNum,
    // Header Authorization
    anonymous: isAnonymous,
  };

  useEffect(() => {
    axios
      .post(`${BASE_URL}/message/create`, paramsToSend)
      .then((response) => {
        console.log(`Your message has been sent successfuly.`);
        navigate("/");
      })
      .catch((error) => {
        console.error(`An error occured while sending the message.`);
      });
  }, [isSent]);

  return (
    <>
      {messageInput ? (
        <Button
          type="primary"
          // paddingX="12px"
          // paddingY="6px"
          fontSize="12px"
          fontSizeDesktop="16px"
          onClick={handleSendButton}
        >
          메시지 보내기&nbsp;
          <img src={sendIcon} alt="sendIcon" />
        </Button>
      ) : (
        <Button
          type="disabled"
          // paddingX="12px"
          // paddingY="6px"
          fontSize="12px"
          fontSizeDesktop="16px"
          onClick={handleSendButton}
        >
          메시지 보내기&nbsp;
          <img src={sendIcon} alt="sendIcon" />
        </Button>
      )}
    </>
  );
};

export default MessageSendButton;
