import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { Button } from "../../components/common/Button";
import envelopeIconRed from "../../assets/envelopeIconRed.svg";
import envelopeIconWhite from "../../assets/envelopeIconWhite.svg";
import styled from "styled-components";

const EnvelopeIcon = styled.img`
   {
    /*${(props) =>
      props.hover &&
      `
        fill: white;
    `}*/
  }
`;

const MessageWriteButton = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken"); // 로컬스토리지의 엑세스토큰 불러오기

  const handleMessageWriteButtonClick = () => {
    if (accessToken) {
      dispatch(setIsMessageWriteVisible(true));
    } else {
      // window.location.href(KAKAO_AUTH_URI);
      navigate("/auth");
    }
  };

  const [messageWriteText, setMessageWriteText] = useState("로그인하고 메시지 쓰러 가기");
  useEffect(() => {
    if (accessToken) {
      setMessageWriteText("메시지 쓰러 가기");
    }
  }, [messageWriteText]);

  return (
    <Button
      type="dottedline"
      width="100%"
      paddingY="16px"
      fontSize="16px"
      onClick={handleMessageWriteButtonClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <img src={envelopeIcon} alt="envelopeIcon" /> */}
      {hover == true ? (
        <EnvelopeIcon src={envelopeIconWhite} alt="envelopeIcon" hover={hover} />
      ) : (
        <EnvelopeIcon src={envelopeIconRed} alt="envelopeIcon" hover={hover} />
      )}
      &nbsp;{messageWriteText}
    </Button>
  );
};

export default MessageWriteButton;
