import styled from "styled-components";

export const Img = styled.img`
    width: ${(props) => props.width || "0px"};
    height:${(props) => props.height || "0px"};
    object-fit: cover;
    border-radius: ${(props) => props.borderRadius || "50%"};
    border: ${(props) => props.border || "none"};
    margin: ${(props) => props.margin || "0"};
    box-shadow: ${(props) => props.boxShadow || "none"};
`;

