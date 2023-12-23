import styled from 'styled-components';

// 컨텐트 영역 레이아웃: 좌우 패딩 32px씩
export const ProfileLayoutMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 30rem;
    height: calc(100vh - 76px - 77px);
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
        width: 23rem;
        padding: 0 2rem 2.3rem 0;
    }
`;
