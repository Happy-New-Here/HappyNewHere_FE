import { BASE_URL } from "../utils/URL";
import axios from "axios";

export const searchResult = async (search, paging) => {
    try {
        //카카오 로그인 액세스 토큰 받아와야함.
        const response = await axios.get(`/api/find/${search}?page=${paging}&size=10&sort=nickname,asc`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.data) {
            throw new Error("검색 결과가 없습니다.");
        }

        console.log("redux search console", response.data)
        return response.data;

    } catch (error) {
        // alert("검색 결과를 불러오는데 실패했습니다.");
        throw new Error(error.message);
    }
}