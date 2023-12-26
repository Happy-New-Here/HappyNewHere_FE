import React from "react";
import styled from "styled-components";
import manual from "../../assets/manual.png";

const StyledImage = styled.img`
  width: 100vw;
  height: auto;
`;

export default function InfoTemplate() {
  return (
    <>
      <StyledImage src={manual} alt="manual" />
    </>
  );
}
