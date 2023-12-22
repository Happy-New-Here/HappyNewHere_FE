import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast({ type = "default" }) {
  const getMessageByType = () => {
    switch (type) {
      case "default":
        return "기본 메시지";
      case "duplicateID":
        return "이미 사용 중인 아이디입니다.";
      case "loginRequired":
        return "로그인이 필요한 서비스입니다.";
      case "profileUpdateError":
        return "프로필 페이지 수정 중 오류가 발생했습니다.";
      default:
        return "알 수 없는 유형의 메시지";
    }
  };

  const notify = () => toast(getMessageByType());

  return (
    <>
      <button onClick={notify}>{type}</button>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
