import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserInfo } from "../../store/User-action";
import { setCurrentPage } from "../../store/currentPageSlice";
import Header from "../common/Header";
import Footer from "../common/Footer";
import EditProfileTab from "../organisms/EditProfile/EditProfileTab";
import EditProfileOrganism from "../organisms/EditProfile/EditProfileOrganism";
import ProfileSubmitButton from "../common/EditProfile/ProfileSubmitButton";
import { useMediaQuery } from "react-responsive";
import {
  PlaceCenter,
  ResponsiveLayoutPC,
  ContentLayout,
  Leftside,
  Center,
  Rightside,
} from "../../styles/utils";
import { SmallText } from "../../styles/text";
import styled from "styled-components";

const ContentLayoutNoFooter = styled(ContentLayout)`
  height: auto;
`;

const EditProfileTemplate = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  // 최초 마운트시에(만) 실행
  useEffect(() => {
    dispatch(setCurrentPage("/editprofile")); // currentPage(로그인 후 돌아올 페이지) 설정
    // GetUserInfo(dispatch); // 유저 정보 get
  }, [dispatch]);

  // 로컬스토리지에 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <>
      {isPc ? (
        <ResponsiveLayoutPC>
          <Leftside>
            <Header />
            <Footer />
          </Leftside>
          <ContentLayout>
            <Center>
              <EditProfileTab />
              <EditProfileOrganism />
              <ProfileSubmitButton />
            </Center>
            <Rightside></Rightside>
          </ContentLayout>
        </ResponsiveLayoutPC>
      ) : (
        <>
          <EditProfileTab />
          <ContentLayoutNoFooter>
            <EditProfileOrganism />
            <ProfileSubmitButton />
          </ContentLayoutNoFooter>

          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default EditProfileTemplate;
