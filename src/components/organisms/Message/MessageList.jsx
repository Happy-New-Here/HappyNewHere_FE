// MessageThumbnail 개수대로 동적 렌더링
import React, { useEffect } from "react";
import MessageThumbnail from "../../common/MessageThumbnail";
import axios from "axios";
import { BASE_URL } from "../../../utils/URL";
import styled from "styled-components";

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MessageList = () => {
  const userId = "mj"; // 임의
  let params = {
    // Header Authorization → jwt 토큰,
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/calender/${userId}`, params)
      .then((response) => {
        console.log(`The message list has been gotten successfuly.`);
      })
      .catch((error) => {
        console.error(`An error occured while fetching the message list.`);
      });
  }, []);

  return (
    <StyledMessageList>
      <MessageThumbnail paperNum="1" />
      <MessageThumbnail paperNum="2" />
      <MessageThumbnail paperNum="3" />
    </StyledMessageList>
  );
};

export default MessageList;
