import styled from "styled-components";
import { PlaceLeftColumn, PlaceLeftRow } from "./utils";
import { SmallText } from "./text";

export const StyledProfile = styled(PlaceLeftRow)`
  width: 100%;
  gap: 12px;
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