import styled from "styled-components";

export const SmallText = styled.span`
  color: ${(props) => props.color || "black"};
  // font-family:
  font-size: ${(props) => props.fontSize || "1rem"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "normal"};
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  justify-content: ${(props) => props.justifyContent || "left"};
`;
