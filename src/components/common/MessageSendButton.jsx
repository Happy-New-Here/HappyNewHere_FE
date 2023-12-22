import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMessageInput } from "../../store/messageInputSlice";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { Button } from "../common/Button";
import sendIcon from "../../assets/sendIcon.svg";
import { BASE_URL } from "../../utils/URL";
import axios from "axios";

const MessageSendButton = () => {
  const params = useParams();
  const receiver = params.userId;
  const selectedPaperNum = useSelector((state) => state.selectedPaperNum);
  const messageInput = useSelector((state) => state.messageInput);
  const isAnonymous = useSelector((state) => state.isAnonymous);
  const [isSent, setIsSent] = useState(false);
  const dispatch = useDispatch();

  // 확인용
  // useEffect(() => {
  //   console.log(`messageInput: ${messageInput}`);
  // }, [messageInput]);

  let paramsToSend = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: {
      context: messageInput,
      receiver: receiver,
      paperNum: selectedPaperNum,
      anonymous: isAnonymous,
    },
  };

  const handleSendButton = () => {
    if (messageInput) {
      axios
        .post(`${BASE_URL}/message/create`, paramsToSend)
        .then((response) => {
          console.log(`Your message has been sent successfuly.`);
          setIsSent(true);
        })
        .catch((error) => {
          console.error(`An error occured while sending the message.`);
        });
    }
  };

  // 메시지 보내지면 알림창 띄운 후 메시지 상태 초기화
  useEffect(() => {
    if (isSent) {
      alert(`메시지 전송이 완료되었어요! 두근두근`);
      setIsSent(false);
      dispatch(setMessageInput(""));
      dispatch(setIsMessageWriteVisible(false));
    }
  }, [isSent]);

  return (
    <>
      {messageInput ? (
        <Button
          type="primary"
          paddingX="12px"
          paddingY="6px"
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
          paddingX="12px"
          paddingY="6px"
          fontSize="12px"
          fontSizeDesktop="16px"
        >
          메시지 보내기&nbsp;
          <img src={sendIcon} alt="sendIcon" />
        </Button>
      )}
    </>
  );
};

export default MessageSendButton;
