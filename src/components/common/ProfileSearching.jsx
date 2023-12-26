import {
  StyledProfile,
  ImgAndNickName,
  NicknameAndStatemsg,
  NicknameContainer,
  Nickname,
  StateMsg,
} from "../../styles/profileStyle";
import { Img } from "../../styles/Img";
import { useMediaQuery } from "react-responsive";

const ProfileSearching = ({ nickname, stateMsg, profileImg }) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

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
            </NicknameContainer>
          </ImgAndNickName>
          {stateMsg && <StateMsg>{stateMsg}</StateMsg>}
        </StyledProfile>
      ) : null}
    </>
  );
};

export default ProfileSearching;
