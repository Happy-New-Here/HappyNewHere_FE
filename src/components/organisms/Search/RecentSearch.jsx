import {
    SmallText,
} from '../../../styles/text';

const RecentSearch = () => {
    return (
        <>
            <SmallText fontWeight="500">최근 검색</SmallText>
        </>

    )
}

export default RecentSearch;


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