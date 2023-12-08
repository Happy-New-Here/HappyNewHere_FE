import React from "react";
import styled from "styled-components";
import { PlaceLeftColumn, PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";
import editIcon from "../../assets/editIcon.svg";
import MessagePaperSRC from "../../utils/MessagePaperSRC"; // 임시

const StyledProfile = styled(PlaceLeftRow)`
  width: 100%;
  gap: 10px;
`;

const Photo = styled.div`
  width: 48px;
  height: 48px;
  margin: 10px 10px;
  border-radius: 50%;
  background: ${(props) => `url(${MessagePaperSRC[props.paperNum]})`}; // 본인 프사로 바꿀 것
  background-size: 100% 100%;
`;

const NicknameAndStatus = styled(PlaceLeftColumn)`
  flex: 1; // Photo 뺀 나머지 공간 차지하도록
  gap: 7px;
  font-style: normal;
  line-height: normal;
`;

const Nickname = styled(SmallText)``;

const Status = styled(SmallText)`
  font-size: 12px;
  color: #959595;
`;

const EditIcon = styled.img`
  cursor: pointer;
`;

const Profile = () => {
  // 나중에 동적 렌더링으로 수정 필요
  const nickname = "주쓰";
  const status = "I bring, I bring all the drama-ma-ma-ma";

  const handleEditClick = () => {
    // 프로필 편집
  };

  return (
    <StyledProfile>
      <Photo background="" paperNum="1" />
      <NicknameAndStatus>
        <Nickname>{nickname}</Nickname>
        <Status>{status}</Status>
      </NicknameAndStatus>
      {/* 편집아이콘 나일 땐 보이고 다른 사람일 땐 안 보이게 */}
      {/* <EditIcon src={editIcon} alt="edit icon" onClick={handleEditClick} /> */}
    </StyledProfile>
  );
};

export default Profile;
