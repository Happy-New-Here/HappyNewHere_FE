import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMicrophone, faImage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    props.width;
  }};
  height: ${(props) => {
    props.height;
  }};
  font-size: ${(props) => {
    props.fontSize;
  }};
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  // transition: background-color 0.3s;
  // font-family: ${(props) => props.theme.fontBody};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const PrimaryButton = styled(StyledButton)`
  border: none;
  background-color: #9a0501;
  color: white;
`;

const DottedlineButton = styled(StyledButton)`
  border: 2px dotted #9a0501;
  background-color: white;
  color: #9a0501;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 10px 0px;
`;

const linkHome = "/home";
const linkMessageWrite = "/message/write";
const linkFriendsFeed = "/";

// type은 버튼 모양 (필수), children은 내용 (없어도 됨)
export const Button = ({ type, children, width, height, fontSize, ...rest }) => {
  const navigate = useNavigate();

  if (type === "undefined") {
    throw new Error("type prop is necessary.");
  } else if (type === "primary") {
    return (
      <PrimaryButton width={width} height={height} fontSize={fontSize} {...rest}>
        {children}
      </PrimaryButton>
    );
  } else if (type === "dottedline") {
    return (
      <DottedlineButton width={width} height={height} fontSize={fontSize} {...rest}>
        {children}
      </DottedlineButton>
    );
  } else throw new Error("undefined type");
};

export const ButtonGroup = ({ children, ...rest }) => {
  return <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>;
};
