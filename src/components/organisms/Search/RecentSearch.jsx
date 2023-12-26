import { SmallText } from "../../../styles/text";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { searchResult } from "../../../store/search-action";
import { useSelector, useDispatch } from "react-redux";
import { SearchAction } from "../../../store/searchSlice";

const RecentSearch = ({ setInputValue, setPageNum, setResultData }) => {
  const [recentHistory, setRecentHistory] = useState([]);
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const recentHistoryString = localStorage.getItem("searchHistory");
    const parsedHistory = JSON.parse(recentHistoryString) || [];
    setRecentHistory(parsedHistory);
  }, []);

  const onClickDelete = () => {
    localStorage.removeItem("searchHistory");
    setRecentHistory([]); // 로컬 스토리지 삭제 후 상태 업데이트
  };

  const onClickRecent = async (item) => {
    dispatch(SearchAction.setSearch(item));
  };

  return (
    <>
      <TextWrapper>
        <SmallText margin="0px 0px 32px 0px" fontWeight="600">
          최근 검색
        </SmallText>
        <SmallText
          fontSize="0.75rem"
          color="#9A0501"
          margin="0px 0px 32px 0px"
          fontWeight="600"
          cursor="pointer"
          onClick={onClickDelete}
        >
          모두 삭제
        </SmallText>
      </TextWrapper>
      <Wrapper>
        {recentHistory.map((item, index) => (
          <SearchWrapper key={index}>
            <LuSearch size="19" color="#909090" />
            <SmallText
              margin="0px 0px 0px 16px"
              onClick={() => onClickRecent(item)}
            >
              {item}
            </SmallText>
            {/* {console.log("아이템", item)} */}
          </SearchWrapper>
        ))}
      </Wrapper>
    </>
  );
};

export default RecentSearch;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 80vh;
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
`;

// const DUMMY_DATA = [
//     {
//         "content": [
//             {
//                 "accountId": 12345,
//                 "userId": "john_doe",
//                 "nickname": "이름",
//                 "profileImg": null
//             },
//             {
//                 "accountId": 1234,
//                 "userId": "이름",
//                 "nickname": "john",
//                 "profileImg": null
//             }
//         ],
//         "pageable": {
//             "pageNumber": 0,
//             "pageSize": 10,
//             "sort": {
//                 "empty": false,
//                 "unsorted": false,
//                 "sorted": true
//             },
//             "offset": 0,
//             "paged": true,
//             "unpaged": false
//         },
//         "last": true,
//         "totalPages": 1,
//         "totalElements": 1,
//         "first": true,
//         "size": 10,
//         "number": 0,
//         "sort": {
//             "empty": false,
//             "unsorted": false,
//             "sorted": true
//         },
//         "numberOfElements": 1,
//         "empty": false
//     }
// ]
