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

// 컨텐트 영역 레이아웃: 좌우 패딩 32px씩
export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: auto;
  gap: 32px;
  padding: 0px 32px;

  @media (min-width: 768px) {
    width: 322px;
  }
`;
