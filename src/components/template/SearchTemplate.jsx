import {
    ResponsiveLayoutPC,
    ResponsiveLayoutMobile,
    InsideLayoutPC,
    InsideLayoutMobile,
} from "../../styles/utils";
import {
    SmallText,
} from "../../styles/text";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../../store/searchSlice";
import { useState } from "react";
import styled from "styled-components";

import Header from "../common/Header";
import Footer from "../common/Footer";
import SearchBar from "../organisms/Search/SearchBar";
import RecentSearch from "../organisms/Search/RecentSearch";
import { searchResult } from "../../store/search-action";
import ResultSearch from "../organisms/Search/ResultSearch";



const SearchTemplate = () => {
    const isPc = useMediaQuery({
        query: "(min-width:768px)"
    });

    const dispatch = useDispatch();
    const formData = useSelector((state) => state.search.search);
    const [inputValue, setInputValue] = useState("");
    const paging = 0;


    const onClickCount = () => {
        //페이지 카운트
    };

    const onClickSearch = async() => {
        //console.log(formData);
       searchResult(formData, paging);
    }

    const handleResetSearch = (e) => {
        setInputValue("");
        dispatch(SearchAction.resetSearch(e.target.value));
    };

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
                            <SearchBar
                                onClick={onClickSearch}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        onClickSearch();
                                    }
                                }}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    dispatch(SearchAction.setSearch(e.target.value))
                                }}
                                onReset={handleResetSearch}
                                value={inputValue}
                            />
                            <TextWrapper>
                                <SmallText
                                    fontSize="0.8rem"
                                    margin="0 0 0 1rem"
                                    onClick={handleResetSearch}
                                >취소</SmallText>
                            </TextWrapper>
                        </SearchTemplateWrapper>
                        {formData.length > 0 ? (
                            <ResultSearch onClick={onClickCount} />
                        ) : (
                            <RecentSearch />
                        )}
                    </InsideLayoutPC>
                </ResponsiveLayoutPC>
            ) : (
                <ResponsiveLayoutMobile>
                    <InsideLayoutMobile>
                        <SearchTemplateWrapper>
                            <SearchBar
                                onClick={onClickSearch}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        onClickSearch();
                                    }
                                }}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    dispatch(SearchAction.setSearch(e.target.value))
                                }}
                                onReset={handleResetSearch}
                                value={inputValue}
                            />
                            <TextWrapper>
                                <SmallText
                                    fontSize="0.8rem"
                                    margin="0 0 0 1rem"
                                    onClick={handleResetSearch}
                                >취소</SmallText>
                            </TextWrapper>
                        </SearchTemplateWrapper>
                        {formData.length > 0 ? (
                            <ResultSearch />
                        ) : (
                            <RecentSearch />
                        )}
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
    margin-bottom: 1rem;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;
