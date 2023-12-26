import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  StyledEditProfileTab,
  StyledEditProfileTabMobile,
  StyledHomeIcon,
} from "./ProfileHearderBar";
import backwardIcon from "../../../assets/backwardIcon.svg";
import { SmallText } from "../../../styles/text";
import homeIcon from "../../../assets/home.svg";
import { useDispatch } from "react-redux";
import { resetUserInfoInput } from "../../../store/UserInfoInputSlice";

const EditProfileTab = () => {
  // 가져온 유저 정보 (편집 전 초기값)
  // const userId = useSelector((state) => state.user.userId);
  // const nickname = useSelector((state) => state.user.nickname);
  // const stateMsg = useSelector((state) => state.user.stateMsg);
  const userId = localStorage.getItem("userId");
  const nickname = localStorage.getItem("nickname");
  const stateMsg = localStorage.getItem("stateMsg");
  // 편집 완료 전 인풋값 임시 저장할 곳
  const nicknameInput = useSelector((state) => state.userInfoInput.nicknameInput);
  const stateMsgInput = useSelector((state) => state.userInfoInput.stateMsgInput);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickBackward = () => {
    if (nickname != nicknameInput || stateMsg != stateMsgInput) {
      const isConfirmed = confirm(`프로필 편집을 취소하시겠어요? 변경값은 저장되지 않아요.`);

      if (isConfirmed) {
        navigate(-1);
        dispatch(resetUserInfoInput());
      }
    } else {
      navigate(-1);
    }
  };

  const handleClickHome = () => {
    if (nickname != nicknameInput || stateMsg != stateMsgInput) {
      const isConfirmed = confirm(`프로필 편집을 취소하시겠어요? 변경값은 저장되지 않아요.`);

      if (isConfirmed) {
        navigate("/");
        dispatch(resetUserInfoInput());
      }
    } else {
      navigate("/");
    }
  };

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <>
      {isPc ? (
        <StyledEditProfileTab>
          <SmallText fontSize="20px">프로필 편집</SmallText>
        </StyledEditProfileTab>
      ) : (
        <StyledEditProfileTabMobile>
          <img src={backwardIcon} alt="backwardIcon" onClick={handleClickBackward} />
          <SmallText fontSize="1.2rem">프로필 편집</SmallText>
          <StyledHomeIcon src={homeIcon} alt="homeIcon" onClick={handleClickHome} />
        </StyledEditProfileTabMobile>
      )}
    </>
  );
};

export default EditProfileTab;
