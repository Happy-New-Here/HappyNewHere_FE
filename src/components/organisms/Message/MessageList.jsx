// MessageThumbnail 개수대로 동적 렌더링
import React, { useEffect, useState } from "react";
import MessageThumbnail from "../../common/MessageThumbnail";
// import axios from "axios";
// import { BASE_URL } from "../../../utils/URL";
import styled from "styled-components";

const StyledMessageList = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

const MessageList = () => {
  //   const userId = "mj"; // 조회할 아이디, 임의
  //   let paramsToRequest = {
  //     // Header Authorization → jwt 토큰,
  //   };
  //   const [responseData, setResponseData] = useState({
  //     isOwner: false,
  //     calanderStyle: "",
  //     messages: [],
  //   }); // 서버에서 가져온 데이터

  //   useEffect(() => {
  //     axios
  //       .get(`${BASE_URL}/calender/${userId}`, paramsToRequest)
  //       .then((response) => {
  //         console.log(`The message list has been gotten successfuly.`);

  //         const { isOwner, calanderStyle, messages } = response.data;
  //         console.log(`isOwner: ${isOwner}, question: ${calanderStyle}, messages: ${messages}`);
  //         setResponseData({ isOwner, calanderStyle, messages });
  //       })
  //       .catch((error) => {
  //         console.error(`An error occured while fetching the message list.`);
  //       });
  //   }, []);

  return (
    // <StyledMessageList>
    //   <MessageThumbnail paperNum="1" />
    // </StyledMessageList>
    <>
      {responseData.messages.map((message, index) => (
        <StyledMessageList key={index}>
          <MessageThumbnail paperNum={message["편지지 번호"]} />
        </StyledMessageList>
      ))}
    </>
  );
};

export default MessageList;
