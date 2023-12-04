import {
    ResponsiveLayoutPC,
    ResponsiveLayoutMobile,
    InsideLayoutPC,
    InsideLayoutMobile,
} from "../../styles/utils";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SearchBar from "../common/Search/SearchBar";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const SearchTemplate = () => {
    const isPc = useMediaQuery({
        query: "(min-width:768px)"
    });

    return (
        <>
            {/* 데탑창입니다. */}
            {isPc ? (
                <ResponsiveLayoutPC>
                    <InsideLayoutPC>
                        <Header />
                        <Footer />
                    </InsideLayoutPC>
                    <InsideLayoutPC>
                        <SearchTemplateWrapper>
                            <SearchBar />
                            <TextWrapper>
                                <SmallText>취소</SmallText>
                            </TextWrapper>
                        </SearchTemplateWrapper>
                    </InsideLayoutPC>
                </ResponsiveLayoutPC>
            ) : (
                <ResponsiveLayoutMobile>
                    <InsideLayoutMobile>
                        <SearchTemplateWrapper>
                            <SearchBar />
                            <TextWrapper>
                                <SmallText>취소</SmallText>
                            </TextWrapper>
                        </SearchTemplateWrapper>
                    </InsideLayoutMobile>
                </ResponsiveLayoutMobile>
            )}

        </>
    )
}

export default SearchTemplate;


const SearchTemplateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

const SmallText = styled.span`
    font-size: 0.8rem;
    margin-left: 1rem;
`;
