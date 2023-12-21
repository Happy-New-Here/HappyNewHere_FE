import {
    StyledProfile,
    NicknameAndStatemsg,
    NicknameContainer,
    Nickname,
    StateMsg,
} from "../../styles/profileStyle";
import { Img } from "../../styles/Img";

const ProfileSearching = ({nickname, stateMsg, profileImg}) => {

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
                </NicknameContainer>
                {stateMsg && <StateMsg>{stateMsg}</StateMsg>}
            </NicknameAndStatemsg>
        </StyledProfile>
    )
}

export default ProfileSearching;