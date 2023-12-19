import { BASE_URL } from "../utils/URL";
import { userAction } from "./User-Slice";
import axios from "axios";

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
