import { Img } from "../../../styles/Img";
import { SmallText } from "../../../styles/text";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProfileSearch = ({ userId, nickname, profileImg }) => {
    const navigate = useNavigate();
    const myId = useSelector((state) => state.user.userId);

    const onClickProfile = () => {
        // console.log("내 아이디", myId);
        // console.log("상대방 아이디", userId);
        if (myId === userId) {
            alert("자기자신은 검색할 수 없습니다.")
        } else {
            navigate(`/friend/${userId}`);
        }
    };

    return (
        <>
            <ProfileSearchWrapper
                onClick={onClickProfile}
            >
                {profileImg &&
                    <Img
                        width="48px"
                        height="48px"
                        boxshadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
                        borderradius="50%"
                        margin="0px 20px 0px 0px"
                        src={profileImg}
                        alt="이미지"
                    />
                }
                <TextWrapper>
                    <SmallText
                        fontSize="0.75rem"
                        margin="0px 0px 10px 0px"
                    >{userId}</SmallText>
                    <SmallText
                        fontSize="0.75rem"
                        color="#959595"
                    >{nickname}</SmallText>
                </TextWrapper>
            </ProfileSearchWrapper>
        </>
    )
}

export default ProfileSearch;

const ProfileSearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    cursor: pointer;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;