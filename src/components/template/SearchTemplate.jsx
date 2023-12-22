import { ResponsiveLayoutPC, ResponsiveLayoutMobile, InsideLayoutPC, InsideLayoutMobile } from '../../styles/utils';
import { SmallText } from '../../styles/text';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { SearchAction } from '../../store/searchSlice';
import { setCurrentPage } from '../../store/currentPageSlice';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../common/Header';
import Footer from '../common/Footer';
import SearchBar from '../common/Search/SearchBar';
import RecentSearch from '../organisms/Search/RecentSearch';
import { searchResult } from '../../store/search-action';
import ResultSearch from '../organisms/Search/ResultSearch';


const SearchTemplate = () => {
    const isPc = useMediaQuery({
        query: '(min-width:768px)',
    });

    const dispatch = useDispatch();
    const formData = useSelector((state) => state.search.search);
    const currentPage = useSelector((state) => state.currentPage);
    // const recentSearchHistory = useSelector((state) => state.search.history);
    const [inputValue, setInputValue] = useState('');
    const [resultData, setResultData] = useState([]);
    const [pageNum, setPageNum] = useState(0);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        dispatch(SearchAction.addSearchToHistory(savedHistory));
    }, [dispatch]);

    // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
    // 최초 마운트시에(만) setCurrentPage를 디스패치
    useEffect(() => {
        dispatch(setCurrentPage('/search'));
    }, [dispatch]);

    // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
    useEffect(() => {
        localStorage.setItem('currentPage', JSON.stringify(currentPage));
    }, [currentPage]);

    const onClickCount = async () => {
        //페이지 카운트
        try {
            const result = await searchResult(formData, pageNum + 1);
            console.log('Search result:', result.content);
            setResultData((prevResult) => [...prevResult, ...result.content]);
            setPageNum((prevPageNum) => prevPageNum + 1);
        } catch (error) {
            // 오류 처리
            throw new Error(error);
            // console.error(error);
        }
    };

    const onClickSearch = async () => {
        try {
            setResultData([]);
            setPageNum(0);
            const result = await searchResult(formData, pageNum);
            //console.log('Search result:', result.content);
            const newResultData = result.content;

            const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
            if (!searchHistory.includes(formData)) {
                searchHistory.unshift(formData);
                if (searchHistory.length > 10) {
                    searchHistory.pop();
                }
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
                dispatch(SearchAction.addSearchToHistory({ searchItem: formData }));
            }

            setResultData(newResultData);

            return newResultData;
        } catch (error) {
            // 오류 처리
            throw new Error(error);
            // console.error(error);
        }
    };

    const handleResetSearch = (e) => {
        setInputValue('');
        dispatch(SearchAction.resetSearch(e.target.value));
        setResultData([]);
    };

    return (
        <>
            {/* 데탑창입니다. */}
            {isPc ? (
                <ResponsiveLayoutPC>
                    <InsideLayoutPC>
                        <Header />
                        <Footer currentPage="search" isPc={isPc} />
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
                                    dispatch(SearchAction.setSearch(e.target.value));
                                    setResultData([]);
                                }}
                                onReset={handleResetSearch}
                                value={inputValue}
                            />
                            <TextWrapper>
                                <SmallText
                                    fontSize="0.8rem"
                                    margin="0 0 0 1rem"
                                    onClick={handleResetSearch}
                                    cursor="pointer"
                                >
                                    취소
                                </SmallText>
                            </TextWrapper>
                        </SearchTemplateWrapper>
                        {formData.length > 0 ? (
                            <ResultSearch searchResult={resultData} onClick={onClickCount} />
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
                                    dispatch(SearchAction.setSearch(e.target.value));
                                    setResultData([]);
                                }}
                                onReset={handleResetSearch}
                                value={inputValue}
                            />
                            <TextWrapper>
                                <SmallText
                                    fontSize="0.8rem"
                                    margin="0 0 0 1rem"
                                    onClick={handleResetSearch}
                                    cursor="pointer"
                                >
                                    취소
                                </SmallText>
                            </TextWrapper>
                        </SearchTemplateWrapper>
                        {formData.length > 0 ? (
                            <ResultSearch searchResult={resultData} onClick={onClickCount} />
                        ) : (
                            <RecentSearch />
                        )}
                        <Footer currentPage="search" isPc={isPc} />
                    </InsideLayoutMobile>
                </ResponsiveLayoutMobile>
            )}
        </>
    );
};

export default SearchTemplate;

const SearchTemplateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;
