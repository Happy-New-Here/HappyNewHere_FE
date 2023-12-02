import React, { useState } from "react";
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

  const handleMessageWriteButtonClick = () => {
    dispatch(setIsMessageWriteVisible(true));
  };

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
      &nbsp;눌러서 메시지 쓰러 가기
    </Button>
  );
};

export default MessageWriteButton;
