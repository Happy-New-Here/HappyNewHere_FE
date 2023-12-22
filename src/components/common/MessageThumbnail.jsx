import React from "react";
import styled from "styled-components";
import {
  MessageThumbnailsSRC,
  MessagePapers,
} from "../../utils/MessagePapersSRC";
import { PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";

const StyledMessageThumbnail = styled(PlaceLeftRow)`
  width: 100%;
  height: 33px;
  padding: 0px 16px;
  border-radius: 5px;
  font-size: 12px;
  background: ${(props) =>
    `url(${MessageThumbnailsSRC}/${MessagePapers[props.day].color}/${
      MessagePapers[props.day].name[props.paperNum]
    })`};
  background-size: cover;
  background-position: right;

  &.active {
    background-color: rgba(128, 128, 128, 0.3); // 회색, Alpha 값 0.3로 설정
  }

  @media (min-width: 768px) {
    padding: 0px 8px;
  }
`;

const TextArea = styled(PlaceLeftRow)`
  width: 70%;
  height: 48%;
  padding-left: 4px;
  background-color: rgb(255, 255, 255, 0.4);
  border-radius: 2px;
  box-shadow: 0 0 4px rgb(255, 255, 255, 0.8);

  @media (min-width: 768px) {
  }
`;

const MessageThumbnail = (props) => {
  const { day, paperNum, sender, onClick } = props;

  return (
    <StyledMessageThumbnail day={day} paperNum={paperNum} onClick={onClick}>
      <TextArea>
        <SmallText fontSize="12px" fontWeight="600">
          From.&nbsp;
        </SmallText>
        <SmallText fontSize="12px">{sender}</SmallText>
      </TextArea>
    </StyledMessageThumbnail>
  );
};

export default MessageThumbnail;
