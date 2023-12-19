import styled from 'styled-components';

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

export const DecoWrapper = styled.div`
    display: inherit;
    flex-direction: row;
    position: absolute;
    top: 5%;
    left: 60%;
    @media (max-width: 768px) {
        top: 10%;
    }
`;

export const SnowManWrapper = styled.div`
    display: inherit;
    flex-direction: row;
    position: absolute;
    left: 13%;
    top: 55%;
    @media (max-width: 768px) {
        width: 37%;
        top: 65%;
        left: 0%;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0.625rem 2rem 0.625rem;
`;
