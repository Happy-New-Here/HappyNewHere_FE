import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  DecoWrapper,
  IdResponsiveLayout,
  SnowManWrapper,
  TextWrapper,
  IdInputContainer,
  IdInputForm,
  BackGround,
} from "../../styles/idStyle";
import IdSubmitButton from "../organisms/UserInfo/IdSubmitButton";
import StateInputBar from "../organisms/UserInfo/StateInputBar";
import IdInputBar from "../organisms/UserInfo/IdInputBar";
import { userAction } from "../../store/User-Slice";
import { idResult } from "../../store/User-action";
import { SmallText } from "../../styles/text";

import AuthPageDeco from "../../assets/AuthPageDeco.svg";
import SnowMan from "../../assets/SnowMan.svg";
import logo from "../../assets/logo.svg";
import LogoWrapper from "../organisms/UserInfo/LogoWrapper";
import Toast from "../common/Toast";

const IdTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.user.userId);
  const stateMsg = useSelector((state) => state.user.stateMsg);
  const currentPage = localStorage.getItem("currentPage"); // 로그인 하면 리덕스 스토어 값 리셋되므로 로컬에서 가져와야 함

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  /** 아이디 입력 event */
  const handleIdChange = (e) => {
    dispatch(userAction.setUserId(e.target.value));
  };

  /** 상태메세지 입력 event */
  const handleStateMsgChange = (e) => {
    dispatch(userAction.setStateMsg(e.target.value));
  };

  /** 버튼 입력 event */
  const handleStartClick = async (e) => {
    e.preventDefault();

    // 아이디 값이 비어 있으면 경고 메시지 표시
    if (!userId || userId.trim() === "") {
      alert("ID 값을 입력해주세요!");
      return; // 함수 실행을 중단
    }

    // 아이디 중복방지 toast 추가
    // <Toast text={"아이디 중복방지"}></Toast>;

    await dispatch(idResult(userId, stateMsg));
    navigate(currentPage);
  };

  return (
    <>
      {isPc ? (
        <IdResponsiveLayout>
          <DecoWrapper className="mb-2">
            <img src={AuthPageDeco} alt="AuthPageDeco" />
          </DecoWrapper>
          <LogoWrapper />
          <TextWrapper>
            <SmallText lineHeight="24px" className="justify-center text-center font-bold">
              해피뉴히어에서 사용하실 프로필을 설정해주세요!
            </SmallText>
            <SmallText
              fontSize="14px"
              color="#9A0501"
              lineHeight="24px"
              className="justify-center text-center"
            >
              * 한 번 설정한 ID는 변경할 수 없어요.
            </SmallText>
          </TextWrapper>
          <IdInputForm>
            <IdInputContainer>
              <IdInputBar onChange={handleIdChange} />
              <StateInputBar onChange={handleStateMsgChange} />
              <IdSubmitButton onClick={handleStartClick} />
            </IdInputContainer>
          </IdInputForm>
          <SnowManWrapper>
            <img src={SnowMan} alt="SnowMan" />
          </SnowManWrapper>
        </IdResponsiveLayout>
      ) : (
        <BackGround>
          <IdResponsiveLayout>
            <img className="mb-7" src={logo} alt="HappyHaedalLogo" />
            <div className="flex justify-center">
              <SmallText lineHeight="24px" className="justify-center text-center font-bold">
                해피뉴히어에서 사용하실&nbsp;
              </SmallText>
              <SmallText lineHeight="24px" className="justify-center text-center font-bold">
                프로필을 설정해주세요!
              </SmallText>
            </div>
            <SmallText
              fontSize="14px"
              color="#9A0501"
              lineHeight="24px"
              className="justify-center text-center"
            >
              * 한 번 설정한 ID는 변경할 수 없어요.
            </SmallText>
            <IdInputForm>
              <IdInputContainer>
                <IdInputBar onChange={handleIdChange} />
                <StateInputBar onChange={handleStateMsgChange} />
                <IdSubmitButton onClick={handleStartClick} />
                <Toast messageType="duplicateID" type="error"></Toast>
              </IdInputContainer>
            </IdInputForm>
          </IdResponsiveLayout>
        </BackGround>
      )}
    </>
  );
};

export default IdTemplate;
