import React, { useEffect } from 'react';
import {
    StyledProfile,
    ProfileImg,
    NicknameAndStatemsg,
    NicknameContainer,
    Nickname,
    StateMsg,
    EditIcon,
} from '../../styles/profileStyle';
import { Img } from '../../styles/Img';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetUserInfo } from '../../store/User-action';
import editIcon from '../../assets/editIcon.svg';

const Profile = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const userId = useSelector((state) => state.user.userId);
    // const nickname = useSelector((state) => state.user.nickname);
    // const stateMsg = useSelector((state) => state.user.stateMsg);
    // const profileImg = useSelector((state) => state.user.profileImg);
    const userId = localStorage.getItem('userId');
    const nickname = localStorage.getItem('nickname');
    const stateMsg = localStorage.getItem('stateMsg');
    const profileImg = localStorage.getItem('profileImg');

    useEffect(() => {
        GetUserInfo(dispatch);
        // 또는 아래와 같이 GetUserInfo 함수를 직접 호출할 수도 있습니다.
        // const fetchUserInfo = async () => {
        //   await GetUserInfo(dispatch);
        // };
        // fetchUserInfo();
    }, [dispatch]);

    const handleEditClick = () => {
        // 프로필 편집 페이지로 이동
        navigate('/editprofile');
    };

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
                    {/* 편집아이콘 나일 땐 보이고 다른 사람일 땐 안 보이게
          url을 확인을 하든 id를 확인을 하든 검증 로직 필요*/}
                    <EditIcon src={editIcon} alt="edit icon" onClick={handleEditClick} />
                </NicknameContainer>
                {stateMsg && <StateMsg>{stateMsg}</StateMsg>}
            </NicknameAndStatemsg>
        </StyledProfile>
    );
};

export default Profile;
