import React from "react";
import Message from "../../common/Message";
import AnonymousCheckbox from "../../common/AnonymousCheckbox";
import MessageSendButton from "../../common/MessageSendButton";
import styled from "styled-components";

const CheckboxAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MessageWriteOrganism = () => {
  return (
    <div>
      <Message />
      <CheckboxAndButton>
        <AnonymousCheckbox />
        <MessageSendButton />
      </CheckboxAndButton>
    </div>
  );
};

export default MessageWriteOrganism;
