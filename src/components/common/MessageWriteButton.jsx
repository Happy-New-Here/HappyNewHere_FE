import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsMessageWriteVisible } from "../../store/isMessageWriteVisibleSlice";
import { setCurrentPage } from "../../store/currentPageSlice";
import { Button } from "../../components/common/Button";
import envelopeIconRed from "../../assets/envelopeIconRed.svg";
import envelopeIconWhite from "../../assets/envelopeIconWhite.svg";
import styled from "styled-components";

const EnvelopeIcon = styled.img``;

const MessageWriteButton = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken"); // 로컬스토리지의 엑세스토큰 불러오기

  const currentPage = useSelector((state) => state.currentPage);

  const handleMessageWriteButtonClick = () => {
    // 액세스토큰 여부 확인하고 처리
    if (accessToken) {
      dispatch(setIsMessageWriteVisible(true));
    } else {
      navigate("/auth");
    }
  };

  // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
  // 최초 마운트시에(만) setCurrentPage를 디스패치
  useEffect(() => {
    dispatch(setCurrentPage("/friend")); // 특정 친구 페이지로 이동하도록 추후 수정
  }, [dispatch]);

  // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  // 로그인 여부에 따라 버튼의 텍스트 다르게 처리
  const [messageWriteText, setMessageWriteText] = useState("");
  useEffect(() => {
    if (accessToken) {
      setMessageWriteText("메시지 쓰러 가기");
    } else {
      setMessageWriteText("로그인하고 메시지 쓰러 가기");
    }
  }, [accessToken]);

  return (
    <Button
      type="dottedline"
      width="100%"
      paddingY="16px"
      fontSize="16px"
      onClick={handleMessageWriteButtonClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover == true ? (
        <EnvelopeIcon src={envelopeIconWhite} alt="envelopeIcon" hover={hover} />
      ) : (
        <EnvelopeIcon src={envelopeIconRed} alt="envelopeIcon" hover={hover} />
      )}
      &nbsp;{messageWriteText}
    </Button>
  );
};

export default MessageWriteButton;
