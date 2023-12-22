import { BASE_URL } from '../utils/URL';
import { userAction } from './User-Slice';
import axios from 'axios';

export const idResult = (userId, stateMessage) => {
    return async (dispatch) => {
        try {
            //카카오 로그인 액세스 토큰 받아와야함.
            const response = await axios.post(
                `${BASE_URL}/personalInfo?userId=${userId}&stateMsg=${stateMessage}`,
                { userId, stateMessage },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            dispatch(userAction.setUserId(response.id));
            dispatch(userAction.setStateMsg(response.message));
        } catch (error) {
            alert('아이디 생성을 실패했습니다.');
            throw new Error(error.message);
        }
    };
};

// userInfo 서버에서 받아오기 (nickname, profileImg, userId)

export const GetUserInfo = async (dispatch) => {
    axios
        .get(`${BASE_URL}/userInfo`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
        .then((response) => {
            console.log(
                `Brought user info successfully. accountId: ${response.data.accountId}, userId: ${response.data.userId}, nickname: ${response.data.nickname}, profileImg: ${response.data.profileImg}`
            );

            // 리덕스 스토어와 로컬 스토리지에 각각 저장
            dispatch(userAction.setUserId(response.data.userId));
            localStorage.setItem('userId', response.data.userId);

            dispatch(userAction.setNickname(response.data.nickname));
            localStorage.setItem('nickname', response.data.nickname);

            if (response.data.profileImg) {
                dispatch(userAction.setProfileImg(response.data.profileImg));
                localStorage.setItem('profileImg', response.data.profileImg);
            }

            if (response.data.stateMsg) {
                dispatch(userAction.setStateMsg(response.data.stateMsg));
                localStorage.setItem('stateMsg', response.data.stateMsg);
            }
        })
        .catch((error) => {
            console.error(`Failed to get user info. `, error);
        });
};
