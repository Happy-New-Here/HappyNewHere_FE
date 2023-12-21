import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetUserInfo } from "../../store/User-action";
import styled from "styled-components";
import { PlaceLeftColumn, PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";
import editIcon from "../../assets/editIcon.svg";
import { Img } from "../../styles/Img";

const StyledProfile = styled(PlaceLeftRow)`
  width: 100%;
  gap: 12px;
`;

const NicknameAndStatemsg = styled(PlaceLeftColumn)`
  flex: 1; // Photo 뺀 나머지 공간 차지하도록
  gap: 7px;
  font-style: normal;
  line-height: normal;
`;

const NicknameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Nickname = styled(SmallText)``;

const StateMsg = styled(SmallText)`
  font-size: 12px;
  color: #959595;
`;

const EditIcon = styled.img`
  cursor: pointer;
`;

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const nickname = useSelector((state) => state.user.nickname);
  const stateMsg = useSelector((state) => state.user.stateMsg);
  const profileImg = useSelector((state) => state.user.profileImg);

  useEffect(() => {
    GetUserInfo(dispatch);

    // 또는 아래와 같이 GetUserInfo 함수를 직접 호출할 수도 있습니다.
    // const fetchUserInfo = async () => {
    //   await GetUserInfo(dispatch);
    // };
    // fetchUserInfo();
  }, [dispatch]);

  const handleEditClick = () => {
    // 프로필 편집
    navigate("/friend"); // 경로 추후 수정
  };

  return (
    <StyledProfile>
      <Img
        width="54px"
        height="54px"
        boxshadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
        borderradius="50%"
        border="0.5px solid #909090"
        src={profileImg}
      />
      <NicknameAndStatemsg>
        <NicknameContainer>
          <Nickname>{nickname}</Nickname>
          {/* 편집아이콘 나일 땐 보이고 다른 사람일 땐 안 보이게
          url을 확인을 하든 id를 확인을 하든 검증 로직 필요*/}
          <EditIcon src={editIcon} alt="edit icon" onClick={handleEditClick} />
        </NicknameContainer>
        {stateMsg && <StateMsg>{stateMsg}</StateMsg>}
      </NicknameAndStatemsg>
    </StyledProfile>
  );
};

export default Profile;
