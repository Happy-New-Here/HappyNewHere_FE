import React from "react";
import styled from "styled-components";
import {
  MessageThumbnailsSRC,
  MessagePapers,
  MessageFontColor,
} from "../../utils/MessagePapersSRC";
import { PlaceLeftRow } from "../../styles/utils";

const StyledMessageThumbnail = styled(PlaceLeftRow)`
  width: 100%;
  height: 33px;
  padding: 0px 10px;
  //   border: 1px solid black;
  border-radius: 5px;
  font-size: 12px;
  background: ${(props) =>
    `url(${MessageThumbnailsSRC}/${MessagePapers[props.day].color}/${
      MessagePapers[props.day].name[props.paperNum]
    })`};
  background-size: 100%;

  @media (min-width: 768px) {
  }
`;

const MessageThumbnail = (props) => {
  const sender = "민주"; // 임의

  return (
    <StyledMessageThumbnail day={props.day} paperNum={props.paperNum}>
      From. {sender}
    </StyledMessageThumbnail>
  );
};

export default MessageThumbnail;
