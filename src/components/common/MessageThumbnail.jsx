import React from "react";
import styled from "styled-components";
import {
  MessageThumbnailsSRC,
  MessagePapers,
  MessageFontColor,
} from "../../utils/MessagePapersSRC";
import { PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";

const StyledMessageThumbnail = styled(PlaceLeftRow)`
  width: 100%;
  height: 33px;
  padding: 0px 20px;
  //   border: 1px solid black;
  border-radius: 5px;
  font-size: 12px;
  background: ${(props) =>
    `url(${MessageThumbnailsSRC}/${MessagePapers[props.day].color}/${
      MessagePapers[props.day].name[props.paperNum]
    })`};
  background-size: cover;

  @media (min-width: 768px) {
  }
`;

const TextArea = styled(PlaceLeftRow)`
  width: 70%;
  height: 48%;
  padding-left: 3px;
  background-color: rgb(255, 255, 255, 0.4);
  border-radius: 2px;
  box-shadow: 0 0 4px rgb(255, 255, 255, 0.8);
`;

const MessageThumbnail = (props) => {
  const sender = "민주"; // 임의

  return (
    <StyledMessageThumbnail day={props.day} paperNum={props.paperNum}>
      <TextArea>
        <SmallText
          fontSize="12px"
          fontWeight="600"
          // color={
          //   props.paperNum === 1 || props.paperNum === 2 || props.paperNum === 3
          //     ? "white"
          //     : "undefined"
          // }
        >
          From.&nbsp;
        </SmallText>
        <SmallText fontSize="12px">{sender}</SmallText>
      </TextArea>
    </StyledMessageThumbnail>
  );
};

export default MessageThumbnail;
