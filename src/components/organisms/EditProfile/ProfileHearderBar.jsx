import styled from "styled-components";
import { PlaceCenter } from "../../../styles/utils";

export const StyledEditProfileTab = styled(PlaceCenter)`
  width: 100vw;
  height: 50px;
  padding: 0 24px;
  justify-content: space-between;
  //   border-bottom: 1px solid black; // 확인용

  @media (min-width: 768px) {
    padding: 0 0;
  }
`;

export const StyledEditProfileTabMobile = styled(PlaceCenter)`
  width: 100%;
  height: auto;
  padding: 1.5rem 1.5rem;

  justify-content: space-between;
`;

export const StyledHomeIcon = styled.img`
  width: 20px;
  height: 20px;
`;
