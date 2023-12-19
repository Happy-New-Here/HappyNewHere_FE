import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { Button } from "../../components/common/Button";
import envelopeIconRed from "../../assets/envelopeIconRed.svg";
import envelopeIconWhite from "../../assets/envelopeIconWhite.svg";
import styled from "styled-components";

const EnvelopeIcon = styled.img``;

const MessageWriteButton = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken"); // 로컬스토리지의 엑세스토큰 불러오기

  const handleMessageWriteButtonClick = () => {
    // 액세스토큰 여부 확인하고 처리
    if (accessToken) {
      dispatch(setIsMessageWriteVisible(true));
    } else {
      navigate("/auth");
    }
  };

  // 로그인 여부에 따라 버튼의 텍스트 다르게 처리
  const [messageWriteText, setMessageWriteText] = useState("");
  useEffect(() => {
    if (accessToken) {
      setMessageWriteText("메시지 쓰러 가기");
    } else {
      setMessageWriteText("로그인하고 메시지 쓰러 가기");
    }
  }, [accessToken]);

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
