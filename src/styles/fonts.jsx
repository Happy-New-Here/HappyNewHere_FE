import { createGlobalStyle } from "styled-components";
import GrandifloraOneRegular from "../styles/font/GrandifloraOne-Regular.woff";
import PretendardRegular from "../styles/font/Pretendard-Regular.woff";

const GlobalFont = createGlobalStyle`
    /* 여기에 초기 스타일을 직접 설정할 수 있습니다. */
    
    @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-Regular'), url(${PretendardRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'GrandifloraOne-Regular';
        src: local('GrandifloraOne-Regular'), url(${GrandifloraOneRegular}) format('woff');
        font-weight: normal;
    }
`;

export default GlobalFont;
