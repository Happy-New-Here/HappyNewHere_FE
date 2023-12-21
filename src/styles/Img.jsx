import styled from "styled-components";

export const Img = styled.img`
    width: ${(props) => props.width || "0px"};
    height:${(props) => props.height || "0px"};
    object-fit: cover;
    border-radius: ${(props) => props.borderradius || "50%"};
    border: ${(props) => props.border || "none"};
    margin: ${(props) => props.margin || "0"};
    box-shadow: ${(props) => props.boxshadow || "none"};
    background: ${(props) => props.background || "none"};
`;

