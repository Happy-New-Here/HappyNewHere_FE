import React from "react";
import { useMediaQuery } from "react-responsive";
import { setCurrentPage } from "../../store/currentPageSlice";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {
  PlaceCenter,
  ResponsiveLayout,
  ContentLayout,
  Leftside,
  Center,
  Rightside,
  ResponsiveLayoutPC,
} from "../../styles/utils";
import { SmallText } from "../../styles/text";
import styled from "styled-components";
import { ContentLayoutMobile } from "../organisms/Home/ContentLayoutMobile";

import manual from "../../assets/manual.svg";

const StyledBeforeOpen = styled(PlaceCenter)`
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const InfoTemplate = ({ isPC }) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <>
      {isPc ? (
        <ResponsiveLayoutPC>
          <Leftside>
            <Header />
            <Footer currentPage="home" isPc={isPc} />
          </Leftside>
          <ContentLayout>
            <Center>
              <StyledImage src={manual} alt="manual" />
            </Center>
          </ContentLayout>

          <Rightside></Rightside>
        </ResponsiveLayoutPC>
      ) : (
        <ResponsiveLayout>
          <Header />
          <ContentLayoutMobile>
            <StyledImage src={manual} alt="manual" />
          </ContentLayoutMobile>
          <Footer currentPage="home" isPc={isPc} />
        </ResponsiveLayout>
      )}
    </>
  );
};

const StyledImage = styled.img`
  width: 100vw;
  height: auto;
`;

export default InfoTemplate;
