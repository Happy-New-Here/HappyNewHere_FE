import {
    SmallText,
} from '../../../styles/text';

const ResultSearch = ({ onClick }) => {

    console.log(DUMMY_DATA);

    return (
        <>
            <SmallText fontWeight="500">검색 결과</SmallText>
            {DUMMY_DATA.map((data) => {
                <>{data.content.accountId}</>
            })}
            <button onClick={onClick}>더보기</button>
        </>

    )
}

export default ResultSearch;

const DUMMY_DATA = [
    {
        "content": [
            {
                "accountId": 12345,
                "userId": "john_doe",
                "nickname": "이름",
                "profileImg": null
            },
            {
                "accountId": 1234,
                "userId": "이름",
                "nickname": "john",
                "profileImg": null
            }
        ],
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": false,
                "unsorted": false,
                "sorted": true
            },
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "last": true,
        "totalPages": 1,
        "totalElements": 1,
        "first": true,
        "size": 10,
        "number": 0,
        "sort": {
            "empty": false,
            "unsorted": false,
            "sorted": true
        },
        "numberOfElements": 1,
        "empty": false
    }
]