import React from "react";
import axios from "axios";
import { Button } from "./Button";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { PlaceRightRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";

const StyledProfileSubmitButton = styled(PlaceRightRow)`
  @media (min-height: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const ProfileSubmitButton = () => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <StyledProfileSubmitButton>
      {isPc ? (
        <Button type="primary" paddingX="12px" paddingY="6px" fontSize="16px">
          완료
        </Button>
      ) : (
        <SmallText color="#909090">완료</SmallText>
      )}
    </StyledProfileSubmitButton>
  );
};

export default ProfileSubmitButton;
