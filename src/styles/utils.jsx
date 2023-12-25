import styled from 'styled-components';

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

export const PlaceRightRow = styled.div`
    display: flex;
    justify-content: flex-end;
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

/** 코드 재사용성을 높이기 위해 주석처리 */
// 템플릿 전체 레이아웃: 기본 좌상단, 데탑버전 중앙
export const ResponsiveLayout = styled.div`
    display: grid;
    /* grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr;
    flex-direction: column; */
    position: fixed;
    top: 0;
    left: 0;
    min-width: 768px;
    width: 100vw;

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
    width: 23.5rem;
    height: calc(100vh - 76px - 77px);
    /* height: 100vh; */
    /* gap: 32px; */
    padding: 0 32px 32px; //상 좌우 하

    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px; /* Width of scrollbar */
        height: 0px; /* Set to 0 for horizontal scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c0c0c0; /* Scrollbar color */
        border-radius: 4px; /* Round the corners of the scrollbar */
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Color of scrollbar track */
    }

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0;
    }
`;

// 데탑 버전 좌, 중앙, 우
export const Leftside = styled.div`
    @media (min-width: 768px) {
        order: 0;
        flex-direction: column;
    }
`;

export const Center = styled.div`
    @media (min-width: 768px) {
        order: 1;

        width: 400px; // 임의
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

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

// Search Template 반응형 레이아웃 파트입니다.
export const ResponsiveLayoutPC = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    align-items: start;
    min-width: 768px;
    gap: 32px;
    width: 100vh;
    height: 100vh;
    margin-top: 2rem;
`;

export const InsideLayoutPC = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ResponsiveLayoutMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    max-width: 768px;
    /* height: 550px; */
    height: 90vh;
`;

export const InsideLayoutMobile = styled.div`
    display: flex;
    flex-direction: column;
`;
