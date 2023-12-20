import { BASE_URL } from "../utils/URL";
import { userAction } from "./User-Slice";
import axios from "axios";
import { useDispatch } from "react-redux";

export const idResult = (userId, statemessage) => {
  return async (dispatch) => {
    try {
      //카카오 로그인 액세스 토큰 받아와야함.
      const response = await axios.post(
        `${BASE_URL}/personalInfo?userId=${userId}`,
        { userId, statemessage },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      /* 아이디 중복 */
      if (!response.data) {
        throw new Error("이미 가입한 아이디입니다.");
      }

      dispatch(userAction.setId({ userId: response.id }));
      dispatch(userAction.setStateMsg({ stateMsg: response.message }));

      return response.data;
    } catch (error) {
      alert("아이디 생성을 실패했습니다.");
      throw new Error(error.message);
    }
  };
};

// userInfo 서버에서 받아오기 (nickname, profileImg)
export const GetUserInfo = (dispatch) => {
  axios
    .get(`${BASE_URL}/userInfo`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((response) => {
      console.log(
        `Brought user info successfully. nickname: ${response.data.nickname}, profileImg: ${response.data.profileImg}`
      );
      dispatch(userAction.setNickname(response.data.nickname));
      dispatch(userAction.setProfileImg(response.data.profileImg));
    })
    .catch((error) => {
      console.error(`Failed to get user info.`);
    });
};
