import MessagePaperSRC, { MessageFontColor } from "../utils/MessagePaperSRC";
import { PlaceTopColumn } from "./utils";
import styled from "styled-components";

export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

// 편지지 영역
export const MessageContainer = styled(PlaceTopColumn)`
  width: 100%;
  background: ${(props) => `url(${MessagePaperSRC[props.paperNum]})`};
  background-size: 100% 100%;
  margin: 0px 0px 16px;
  padding: 24px 32px 48px;
  border-radius: 5px;
`;

export const CancelIcon = styled.img`
  width: 8px;
  height: 8px;
  position: relative;
  top: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }

  // @media (prefers-color-scheme: dark) {
  //   filter: invert(100%);
  // }

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const ReceiverOrSender = styled.p`
  font-weight: bold;
`;

// 발신/수신자 및 메시지 내용
export const MessageText = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  color: ${(props) => props.fontColor};
`;
