import styled from "styled-components";
import { PlaceLeftColumn, PlaceLeftRow } from "./utils";
import { SmallText } from "./text";
import { Img } from "../../styles/Img";

export const StyledProfile = styled(PlaceLeftRow)`
  width: 100%;
  gap: 12px;
`;

export const ProfileImg = styled(Img)`
  width: ${(props) => props.widthMobile || "54px"};
  height: ${(props) => props.heightMobile || "54px"};
  border-radius: 50%;
  border: 0.5px solid #909090;
  boxshadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background: url(${(props) => props.backgroundImg}) center/cover;

  @media (min-width: 768px) {
    width: ${(props) => props.widthDesktop || "46px"};
    height: ${(props) => props.heightDesktop || "46px"};
  }
`;

export const NicknameAndStatemsg = styled(PlaceLeftColumn)`
  flex: 1; // Photo 뺀 나머지 공간 차지하도록
  gap: 7px;
  font-style: normal;
  line-height: normal;
`;

export const NicknameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Nickname = styled(SmallText)``;

export const StateMsg = styled(SmallText)`
  font-size: 12px;
  color: #959595;
`;

export const EditIcon = styled.img`
  cursor: pointer;
`;
