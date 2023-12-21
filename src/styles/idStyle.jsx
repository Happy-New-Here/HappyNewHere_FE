import styled from 'styled-components';

export const IdInputForm = styled.div`
    width: 30%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const IdInputContainer = styled.div`
    margin-top: 0.5rem;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

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

export const DecoWrapper = styled.div`
    display: inherit;
    flex-direction: row;
    position: absolute;
    top: 5%;
    left: 60%;
    margin-bottom: 1rem;
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
    margin: 0.7rem 0.625rem 1.5rem 0;
`;
