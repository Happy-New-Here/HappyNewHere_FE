import styled from 'styled-components';

export const BackGround = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #fffbee;
`;

export const IdResponsiveLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    max-width: 1024px;
    max-height: 550px;
    position: relative;

    @media (max-width: 768px) {
        max-width: 360px;
        max-height: 800px;
    }
`;
