import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GetUserInfo } from "../../store/User-action";
import styled from "styled-components";
import { PlaceLeftColumn, PlaceLeftRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";
import editIcon from "../../assets/editIcon.svg";

const StyledProfile = styled(PlaceLeftRow)`
  width: 100%;
  gap: 10px;
`;

const Photo = styled.div`
  width: 48px;
  height: 48px;
  margin: 10px 10px;
  border-radius: 50%;
  border: 1px solid #909090;
  background: ${(props) => props.profileImg};
  background-size: 100% 100%;
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
  // const nickname = "주쓰";
  // const statusMsg = "I bring, I bring all the drama-ma-ma-ma";
  const userId = useSelector((state) => state.user.userId);
  const nickname = useSelector((state) => state.user.nickname);
  const stateMsg = useSelector((state) => state.user.stateMsg);
  const profileImg = useSelector((state) => state.user.profileImg);

  useEffect(() => {
    const FetchData = async () => {
      await GetUserInfo();
    };

    FetchData();
  }, [nickname, stateMsg, profileImg]);

  const handleStartClick = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(idResult(userId));
      navigate("/");
      return response.data;
    } catch (error) {
      console.log(error);
    }

    console.log("버튼 입력시 로그", userId);
  };

  const handleEditClick = () => {
    // 프로필 편집
  };

  return (
    <StyledProfile>
      <Photo background={profileImg} />
      <NicknameAndStatus>
        <Nickname>{nickname}</Nickname>
        <StateMsg>{stateMsg}</StateMsg>
      </NicknameAndStatus>
      {/* 편집아이콘 나일 땐 보이고 다른 사람일 땐 안 보이게 */}
      {/* <EditIcon src={editIcon} alt="edit icon" onClick={handleEditClick} /> */}
    </StyledProfile>
  );
};

export default Profile;
