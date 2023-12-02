import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/Button";
import envelopeIcon from "../../../assets/envelopeIcon.svg";
import styled from "styled-components";

const MessageWriteButtonOrganism = () => {
  const navigate = useNavigate();

  const handleMessageWriteButtonClick = () => {
    navigate("/");
  };

  return (
    <Button
      type="dottedline"
      width="100%"
      paddingY="16px"
      fontSize="16px"
      onClick={handleMessageWriteButtonClick}
    >
      <img src={envelopeIcon} alt="envelopeIcon" />
      &nbsp;눌러서 메시지 쓰러 가기
    </Button>
  );
};

export default MessageWriteButtonOrganism;
