import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/currentPageSlice";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useMediaQuery } from "react-responsive";
import {
  PlaceCenter,
  ResponsiveLayout,
  ContentLayout,
  Leftside,
  Center,
  Rightside,
} from "../../styles/utils";
import { SmallText } from "../../styles/text";
import styled from "styled-components";

const EditProfileTemplate = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
  // 최초 마운트시에(만) setCurrentPage를 디스패치
  useEffect(() => {
    dispatch(setCurrentPage("/auth/editprofile"));
  }, [dispatch]);

  // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <ResponsiveLayout>
      {isPc ? (
        <>
          <Leftside>
            <Header />
            <Footer currentPage="mypage" isPc={isPc} />
          </Leftside>
          <ContentLayout>
            <Center></Center>
            <Rightside></Rightside>
          </ContentLayout>
        </>
      ) : (
        <>
          <ContentLayout></ContentLayout>

          <Footer currentPage="mypage" isPc={isPc} />
        </>
      )}
    </ResponsiveLayout>
  );
};

export default EditProfileTemplate;
