import styled from "styled-components";

export const SmallText = styled.span`
    font-size: ${props => props.fontSize || '1rem'};
    font-weight: ${props => props.fontweight || '400'};
    margin: ${props => props.margin || '0'};
    cursor: pointer;
`;