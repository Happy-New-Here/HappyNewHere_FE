import { SmallText } from '../../../styles/text';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { LuSearch } from "react-icons/lu";

const RecentSearch = () => {
    const [recentHistory, setRecentHistory] = useState([]);

    useEffect(() => {
        const recentHistoryString = localStorage.getItem("searchHistory");
        const parsedHistory = JSON.parse(recentHistoryString) || [];
        setRecentHistory(parsedHistory);
    }, []);

    const onClickDelete = () => {
        localStorage.removeItem("searchHistory");
        setRecentHistory([]); // 로컬 스토리지 삭제 후 상태 업데이트
    }

    return (
        <>
            <TextWrapper>
                <SmallText margin="0px 0px 32px 0px" fontWeight="600">최근 검색</SmallText>
                <SmallText
                    fontSize="0.75rem"
                    color='#9A0501'
                    margin="0px 0px 32px 0px"
                    fontWeight="600"
                    cursor="pointer"
                    onClick={onClickDelete}
                >모두 삭제</SmallText>
            </TextWrapper>
            {recentHistory.map((item, index) => (
                <SearchWrapper key={index}>
                    <LuSearch
                        size="19"
                        color="#909090"
                    />
                    <SmallText
                        margin="0px 0px 0px 16px"
                    >{item}</SmallText>
                    {console.log("아이템", item)}
                </SearchWrapper>
            ))}
        </>
    )
}

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