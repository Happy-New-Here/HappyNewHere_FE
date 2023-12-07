import React from "react";
import MessageWrite from "../../common/MessageWrite";
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
      <MessageWrite />
      <CheckboxAndButton>
        <AnonymousCheckbox />
        <MessageSendButton />
      </CheckboxAndButton>
    </div>
  );
};

export default MessageWriteOrganism;
