import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { userAction } from "../../store/User-Slice";
import { idResult } from "../../store/User-action";
import {
  DecoWrapper,
  IdResponsiveLayout,
  SnowManWrapper,
  TextWrapper,
} from "../organisms/UserInfo/IdPcStyle";
import { BackGround } from "../organisms/UserInfo/IdMobileStyle";
import { SmallText } from "../../styles/text";
import IdSubmitButton from "../organisms/UserInfo/IdSubmitButton";
import StateInputBar from "../organisms/UserInfo/StateInputBar";
import IdInputBar from "../organisms/UserInfo/IdInputBar";

import HappyHaedalLogo from "../../assets/HappyHaedalLogo.svg";
import logo from "../../assets/logo.svg";
import AuthPageDeco from "../../assets/AuthPageDeco.svg";
import SnowMan from "../../assets/SnowMan.svg";
import IdInputBarPC from "../organisms/UserInfo/IdinputBarPc";
import { IdInputContainer } from "../organisms/UserInfo/IdInputContainer";
import { IdInputForm } from "../organisms/UserInfo/IdInputForm";

const IdTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.user.userId);
  const statemessage = useSelector((state) => state.user.stateMsg);

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  /** 아이디 입력 event */
  const handleIdChange = (e) => {
    dispatch(userAction.setId(e.target.value));
  };

  /** 상태메세지 입력 event */
  const handleStateMsgChange = (e) => {
    dispatch(userAction.setStateMsg(e.target.value));
  };

  /** 버튼 입력 event */
  const handleStartClick = async (e) => {
    e.preventDefault();
    try {
        const response = await dispatch(
            idResult(userId)
        )
        navigate("/");
        return response.data;
    } catch (error) {
      console.log(error);
    }

    console.log("버튼 입력시 로그", userId);
  };

  return (
    <>
      {isPc ? (
        <IdResponsiveLayout>
          <DecoWrapper>
            <img src={AuthPageDeco} alt="AuthPageDeco" />
          </DecoWrapper>
          <img src={HappyHaedalLogo} alt="HappyHaedalLogo" />
          <TextWrapper>
            <SmallText className="justify-center text-center font-bold">
              HappyNewHere에서 사용하실 아이디를 알려주세요!
            </SmallText>
          </TextWrapper>
          <IdInputForm>
            <IdInputContainer>
              <IdInputBarPC onChange={handleIdChange} />
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
            <SmallText className="justify-center text-center font-bold">
              HappyNewHere에서 사용하실
            </SmallText>
            <SmallText className="justify-center text-center font-bold">
              아이디를 알려주세요!
            </SmallText>
            {/* <form className="mt-3"> */}
            <IdInputForm>
              <IdInputContainer className="p-5">
                <IdInputBar onChange={handleIdChange} />
                <StateInputBar onChange={handleStateMsgChange} />
                <IdSubmitButton onClick={handleStartClick} />
              </IdInputContainer>
            </IdInputForm>
            {/* </form> */}
          </IdResponsiveLayout>
        </BackGround>
      )}
    </>
  );
};

export default IdTemplate;
