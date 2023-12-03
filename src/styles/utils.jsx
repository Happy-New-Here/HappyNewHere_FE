import styled from "styled-components";

export const PlaceCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceLeftRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PlaceLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PlaceTopColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// 템플릿 전체 레이아웃: 기본 좌상단, 데탑버전 중앙
export const ResponsiveLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;

  @media (min-width: 768px) {
    // 중앙 정렬
    left: 50%;
    transform: translateX(-50%);

    flex-direction: row;
    margin-top: 32px;
    gap: 32px;
  }
`;

// 헤더 영역 레이아웃
export const HeaderLayout = styled(PlaceLeftRow)`
  width: 100vw;
  height: 76px;
  padding: 20px 20px;

  @media (min-width: 768px) {
    width: 156px; // 임의
    height: auto;
    padding: 0 0;
  }
`;

// 컨텐트 영역 레이아웃: 좌우 패딩 32px씩
export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  gap: 32px;
  padding: 0px 32px;

  overflow: scroll;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  }
`;

// 데탑 버전 좌, 중앙, 우
export const Leftside = styled.div`
  @media (min-width: 768px) {
    order: 0;
    flex-direction: coloum;
  }
`;

export const Center = styled.div`
  @media (min-width: 768px) {
    order: 1;

    width: 400px; // 임의
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;

    // overflow: scroll;
  }
`;

export const Rightside = styled(PlaceTopColumn)`
  @media (min-width: 768px) {
    order: 2;
    width: 176px; // 임의
    gap: 32px;
  }
`;
