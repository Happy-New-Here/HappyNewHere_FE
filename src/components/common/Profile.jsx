import React, { useEffect } from "react";
import {
  StyledProfile,
  ProfileImg,
  ImgAndNickName,
  NicknameAndStatemsg,
  NicknameContainer,
  Nickname,
  StateMsg,
  EditIcon,
} from "../../styles/profileStyle";
import { Img } from "../../styles/Img";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetUserInfo } from "../../store/User-action";
import editIcon from "../../assets/editIcon.svg";
import { useMediaQuery } from "react-responsive";

const Profile = () => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const userId = useSelector((state) => state.user.userId);
  // const nickname = useSelector((state) => state.user.nickname);
  // const stateMsg = useSelector((state) => state.user.stateMsg);
  // const profileImg = useSelector((state) => state.user.profileImg);
  const userId = localStorage.getItem("userId");
  const nickname = localStorage.getItem("nickname");
  const stateMsg = localStorage.getItem("stateMsg");
  const profileImg = localStorage.getItem("profileImg");

  useEffect(() => {
    GetUserInfo(dispatch);
    // 또는 아래와 같이 GetUserInfo 함수를 직접 호출할 수도 있습니다.
    // const fetchUserInfo = async () => {
    //   await GetUserInfo(dispatch);
    // };
    // fetchUserInfo();
  }, [dispatch, userId, nickname, stateMsg, profileImg]);

  const handleEditClick = () => {
    // 프로필 편집 페이지로 이동
    navigate("/editprofile");
  };

  return (
    <>
      {isPc ? (
        <StyledProfile>
          <ImgAndNickName>
            <Img
              width="54px"
              height="54px"
              boxshadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
              borderradius="50%"
              border="0.5px solid #909090"
              src={profileImg}
            />
            <NicknameContainer>
              <Nickname>{nickname}</Nickname>
              <EditIcon src={editIcon} alt="edit icon" onClick={handleEditClick} />
            </NicknameContainer>
          </ImgAndNickName>
          {stateMsg && <StateMsg>{stateMsg}</StateMsg>}
        </StyledProfile>
      ) : (
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

              <EditIcon src={editIcon} alt="edit icon" onClick={handleEditClick} />
            </NicknameContainer>
            {stateMsg && <StateMsg>{stateMsg}</StateMsg>}
          </NicknameAndStatemsg>
        </StyledProfile>
      )}{" "}
    </>
  );
};

export default Profile;
