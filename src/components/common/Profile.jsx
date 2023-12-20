import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUserInfo } from "../../store/User-action";
import styled from "styled-components";
import { PlaceLeftColumn, PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";
import editIcon from "../../assets/editIcon.svg";

const StyledProfile = styled(PlaceLeftRow)`
  width: 100%;
  gap: 12px;
`;

const ProfileImg = styled.div`
  width: 54px;
  height: 54px;
  // margin: 10px 10px;
  border-radius: 50%;
  border: 0.5px solid #909090;
  background: url(${(props) => props.backgroundImg}) center/cover;
`;

const NicknameAndStatus = styled(PlaceLeftColumn)`
  flex: 1; // Photo 뺀 나머지 공간 차지하도록
  gap: 7px;
  font-style: normal;
  line-height: normal;
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
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userId);
  const nickname = useSelector((state) => state.user.nickname);
  const stateMsg = useSelector((state) => state.user.stateMsg);
  const profileImg = useSelector((state) => state.user.profileImg);
  // const profileImg = {
  //   url: useSelector((state) => state.user.profileImg),
  //   alt: "profileImg",
  // };

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
  };

  return (
    <StyledProfile>
      <ProfileImg backgroundImg={profileImg} />
      <NicknameAndStatus>
        {stateMsg ? (
          <>
            <Nickname>{nickname}</Nickname>
            <StateMsg>{stateMsg}</StateMsg>
          </>
        ) : (
          <Nickname>{nickname}</Nickname>
        )}
      </NicknameAndStatus>
      {/* 편집아이콘 나일 땐 보이고 다른 사람일 땐 안 보이게 */}
      {/* <EditIcon src={editIcon} alt="edit icon" onClick={handleEditClick} /> */}
    </StyledProfile>
  );
};

export default Profile;
