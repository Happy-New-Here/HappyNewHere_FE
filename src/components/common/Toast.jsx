import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export default function Toast({ messageType = "default", type = "error" }) {
  const getMessageByType = () => {
    switch (messageType) {
      case "default":
        return "기본 메시지";
      case "myId":
        return "본인의 ID는 검색할 수 없습니다.";
      case "duplicateID":
        return "이미 사용 중인 ID입니다.";
      case "loginRequired":
        return "로그인이 필요한 서비스입니다.";
      case "profileUpdateError":
        return "프로필 페이지 수정 중 오류가 발생했습니다.";
      case "success":
        return `성공`;
      case "errId":
        return "설정하지 않은 닉네임은 접속이 불가합니다.";
      default:
        return "알 수 없는 유형의 메시지";
    }
  };

  const getType = () => {
    switch (type) {
      case "error":
        return "error";
      case "info":
        return "info";
      case "success":
        return "success";
      case "warning":
        return "warning";
      default:
        return "error";
    }
  };

  const notify = () => {
    const message = getMessageByType();
    const toastType = getType();

    switch (toastType) {
      case "error":
        toast.error(<CustomStyledToast>{message}</CustomStyledToast>);
        break;
      case "info":
        toast.info(<CustomStyledToast>{message}</CustomStyledToast>);
        break;
      case "success":
        toast.success(<CustomStyledToast>{message}</CustomStyledToast>);
        break;
      case "warning":
        toast.warning(<CustomStyledToast>{message}</CustomStyledToast>);
        break;
      default:
        toast.error("알 수 없는 타입의 메시지");
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 notify 함수를 호출하여 알림 표시
    notify();
  }, []); // 빈 배열을 두어 한 번만 호출되도록 설정

  return (
    <>
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

const CustomStyledToast = styled.div`
  padding-left: 0.5rem; /* 토스트 메시지의 안쪽 여백 설정 */
  font-family: pretandard, sans-serif;
`;
