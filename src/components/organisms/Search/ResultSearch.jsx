import { SmallText } from "../../../styles/text";
import ProfileSearch from "./ProfileSearch";

const ResultSearch = ({ onClick, searchResult, setResultData }) => {
  console.log("검색 결과", searchResult);

  return (
    <>
      <SmallText margin="0px 0px 32px 0px" fontWeight="600">
        검색 결과
      </SmallText>
      {searchResult.length > 0 ? (
        searchResult.map((data, index) => (
          <ProfileSearch
            key={index}
            id={data.accountId}
            userId={data.userId}
            nickname={data.nickname}
            profileImg={data.profileImg}
            setResultData={setResultData}
          />
        ))
      ) : (
        <SmallText>검색 결과가 없습니다.</SmallText>
      )}

      {searchResult.length === 10 && <button onClick={onClick}>더 보기</button>}
    </>
  );
};

export default ResultSearch;

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
