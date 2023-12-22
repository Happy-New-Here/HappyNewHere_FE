import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/currentPageSlice';
import Header from '../common/Header';
import TodayQuestionOrganism from '../organisms/Message/TodayQuestionOrganism';
import MessageWriteButtonOrganism from '../organisms/Message/MessageWriteButtonOrganism';
import MessagePaperThumbnailOrganism from '../organisms/Message/MessagePaperThumbnailOrganism';
import MessageWriteOrganism from '../organisms/Message/MessageWriteOrganism';
import Footer from '../common/Footer';
import { ResponsiveLayoutPC, Leftside, Center, Rightside, ContentLayout } from '../../styles/utils';
import { useSpring, animated } from 'react-spring'; // 애니메이션
import { useMediaQuery } from 'react-responsive';
import ProfileSearching from '../common/ProfileSearcing';
import { useParams } from 'react-router';
import { searchResult } from '../../store/search-action';
import { userAction } from '../../store/User-Slice';

const MessageWriteTemplate = () => {

  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.searchUser.nickname);
  const stateMsg = useSelector((state) => state.searchUser.stateMsg);
  const profileImg = useSelector((state) => state.searchUser.profileImg);
  const currentPage = useSelector((state) => state.currentPage);
  const isMessageWriteVisible = useSelector((state) => state.isMessageWriteVisible);
  // const animationProps = useSpring({
  //   opacity: isMessageWriteVisible ? 1 : 0,
  //   config: { duration: 300 },
  // });
  const animationProps = useSpring({
    transform: isMessageWriteVisible ? 'translateX(0%)' : 'translateX(-20%)',
    config: { duration: 300 }, // 속도
  });

  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });

  // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
  // 최초 마운트시에(만) setCurrentPage를 디스패치
  useEffect(() => {
    dispatch(setCurrentPage('/friend/:userId')); // 특정 친구 페이지로 이동하도록 추후 수정
  }, [dispatch]);

  // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify(currentPage));
  }, [currentPage]);


  useEffect(() => {
    const axiosUserInfo = async () => {
      const result = await searchResult(userId, 0);
      // console.log('Search result:', result.content);
      dispatch(userAction.setSearchingNickname(result.content[0].nickname));
      dispatch(userAction.setSearchingProfileImg(result.content[0].profileImg));
      dispatch(userAction.setSearchingStateMsg(result.content[0].stateMsg));
    }
    axiosUserInfo();
  }, [userId])

  return (
    <ResponsiveLayoutPC>
      {window.innerWidth >= 768 ? (

        <>
          <Leftside>
            <Header />
            <Footer currentPage="home" isPc={isPc} />
          </Leftside>
          <>
            <Center>
              {/* <TodayQuestionOrganism /> */}
              {isMessageWriteVisible ? (
                <>
                  <MessagePaperThumbnailOrganism />
                  <MessageWriteOrganism />
                </>
              ) : (
                <>
                  <TodayQuestionOrganism nickname={nickname} />
                  <MessageWriteButtonOrganism />
                </>
              )}
            </Center>
          </>
          <Rightside>
            <ProfileSearching nickname={nickname} stateMsg={stateMsg} profileImg={profileImg} />
            {isMessageWriteVisible ? (
              <animated.div style={animationProps}>
                <TodayQuestionOrganism />
              </animated.div>
            ) : (
              <></>
            )}
          </Rightside>
        </>
      ) : (
        <>
          <Header />
          <ContentLayout>
            <ProfileSearching nickname={nickname} stateMsg={stateMsg} profileImg={profileImg} />
            <TodayQuestionOrganism nickname={nickname} />
            {isMessageWriteVisible ? (
              <>
                <MessagePaperThumbnailOrganism />
                <MessageWriteOrganism />
              </>
            ) : (
              <MessageWriteButtonOrganism />
            )}
          </ContentLayout>
          <Footer currentPage="home" />
        </>
      )}
    </ResponsiveLayoutPC >
  );
};

export default MessageWriteTemplate;
