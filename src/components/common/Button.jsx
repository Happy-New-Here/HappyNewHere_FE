// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMicrophone, faImage } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.paddingY} ${(props) => props.paddingX};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize};
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  // transition: background-color 0.3s;
  // font-family: ${(props) => props.theme.fontBody};

  border: none;
  background-color: #9a0501;
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.fontSizeDesktop};
  }
`;

const PrimaryButton = styled(StyledButton)``;

const DottedlineButton = styled(StyledButton)`
  border: 1.5px dotted #9a0501;
  background-color: white;
  color: #9a0501;

  &:hover {
    cursor: pointer;
    background-color: #9a0501;
    color: white;
    opacity: 0.8;
  }

  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;

const DisabledButton = styled(StyledButton)`
  opacity: 0.5;
  // cursor: not-allowed;
  pointer-events: none;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 10px 0px;
`;

const linkHome = "/";
const linkMessageWrite = "/message/write";

// type은 버튼 모양 (필수), children은 내용 (선택), 나머지도 다 선택 사항
export const Button = ({
  type,
  children,
  width,
  height,
  paddingX,
  paddingY,
  fontSize,
  fontSizeDesktop,
  disabled,
  ...rest
}) => {
  if (type === "undefined") {
    throw new Error("type prop is necessary.");
  } else if (type === "primary") {
    return (
      <PrimaryButton
        width={width}
        height={height}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        fontSizeDesktop={fontSizeDesktop}
        {...rest}
      >
        {children}
      </PrimaryButton>
    );
  } else if (type === "dottedline") {
    return (
      <DottedlineButton
        width={width}
        height={height}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        fontSizeDesktop={fontSizeDesktop}
        {...rest}
      >
        {children}
      </DottedlineButton>
    );
  } else if (type === "disabled") {
    return (
      <DisabledButton
        width={width}
        height={height}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        fontSizeDesktop={fontSizeDesktop}
        {...rest}
      >
        {children}
      </DisabledButton>
    );
  } else throw new Error("undefined type");
};

export const ButtonGroup = ({ children, ...rest }) => {
  return <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>;
};
