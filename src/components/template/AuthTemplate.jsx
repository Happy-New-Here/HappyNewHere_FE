import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { SmallText } from "../../styles/text";

import KakaoLoginBtn from "../common/Button/KakaoLoginBtn";
import HappyHaedalLogo from "../../assets/HappyHaedalLogo.svg";
import logo from "../../assets/logo.svg";
import AuthPageDeco from "../../assets/AuthPageDeco.svg";
import SnowMan from "../../assets/SnowMan.svg";

const AuthTemplate = () => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <>
      {isPc ? (
        <AuthResponsiveLayout>
          <DecoWrapper>
            <img src={AuthPageDeco} alt="AuthPageDeco" />
          </DecoWrapper>
          <img src={HappyHaedalLogo} alt="HappyHaedalLogo" />
          <TextWrapper>
            <SmallText fontWeight="600">
              가장 추운 계절에 만나는 가장 따뜻한 축제 크리스마스,
            </SmallText>
            <SmallText fontWeight="600">
              바로 여기, 해피뉴히어에서 친구에게 따뜻한 마음을 전해보세요!
            </SmallText>
          </TextWrapper>
          <ButtonWrapper>
            <KakaoLoginBtn />
          </ButtonWrapper>
          <SnowManWrapper>
            <img src={SnowMan} alt="SnowMan" />
          </SnowManWrapper>
        </AuthResponsiveLayout>
      ) : (
        <BackGround>
          <AuthResponsiveLayout>
            <DecoWrapper>
              <img src={AuthPageDeco} alt="AuthPageDeco" />
            </DecoWrapper>
            <img src={logo} alt="logo" />
            <TextWrapper>
              <SmallText
                fontWeight="600"
                justifycontent="center"
                textalign="center"
              >
                가장 추운 계절에 만나는
                <br /> 가장 따뜻한 축제 크리스마스,
              </SmallText>
              <SmallText
                fontWeight="600"
                justifycontent="center"
                textalign="center"
              >
                바로 여기, 해피뉴히어에서
                <br /> 친구에게 따뜻한 마음을 전해보세요!
              </SmallText>
            </TextWrapper>
            <ButtonWrapper>
              <KakaoLoginBtn />
            </ButtonWrapper>
            <SnowManWrapper>
              <img src={SnowMan} alt="SnowMan" />
            </SnowManWrapper>
          </AuthResponsiveLayout>
        </BackGround>
      )}
    </>
  );
};

export default AuthTemplate;

const AuthResponsiveLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 1024px;
  max-height: 550px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 360px;
    max-height: 800px;
  }
`;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #fffbee;
`;

const DecoWrapper = styled.div`
  display: inherit;
  flex-direction: row;
  position: absolute;
  top: 5%;
  left: 60%;
  @media (max-width: 768px) {
    top: 10%;
  }
`;

const SnowManWrapper = styled.div`
  display: inherit;
  flex-direction: row;
  position: absolute;
  left: 13%;
  top: 55%;
  @media (max-width: 768px) {
    width: 37%;
    top: 65%;
    left: 0%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0.625rem 2rem 0.625rem;
`;

const ButtonWrapper = styled.div`
  margin: 0 2rem 0 2rem;
`;
