import { BASE_URL } from "../utils/URL";
import axios from "axios";

export const searchResult = async (search) => {
    try {
        const response = await axios.get(`${BASE_URL}/find/이름?page=0&size=10&sort=nickname,${search}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.data) {
            throw new Error("검색 결과가 없습니다.");
        }

        return response.data;

    } catch (error) {
        alert("검색 결과를 불러오는데 실패했습니다.");
        throw new Error(error.message);
    }
}