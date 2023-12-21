import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
    DecoWrapper,
    IdResponsiveLayout,
    SnowManWrapper,
    TextWrapper,
    IdInputContainer,
    IdInputForm,
    BackGround
} from '../../styles/idStyle';
import IdSubmitButton from '../organisms/UserInfo/IdSubmitButton';
import StateInputBar from '../organisms/UserInfo/StateInputBar';
import IdInputBar from '../organisms/UserInfo/IdInputBar';
import { userAction } from '../../store/User-Slice';
import { idResult } from '../../store/User-action';
import { SmallText } from '../../styles/text';

import AuthPageDeco from '../../assets/AuthPageDeco.svg';
import SnowMan from '../../assets/SnowMan.svg';
import logo from '../../assets/logo.svg';
import LogoWrapper from '../organisms/UserInfo/LogoWrapper';

const IdTemplate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = useSelector((state) => state.user.userId);
    const stateMsg = useSelector((state) => state.user.stateMsg);

    const isPc = useMediaQuery({
        query: '(min-width:768px)',
    });

    /** 아이디 입력 event */
    const handleIdChange = (e) => {
        dispatch(userAction.setId(e.target.value));
    };

    /** 상태메세지 입력 event */
    const handleStateMsgChange = (e) => {
        dispatch(userAction.setStateMsg(e.target.value));
    };

    /** 버튼 입력 event */
    const handleStartClick = async (e) => {
        e.preventDefault();
        await dispatch(idResult(userId, stateMsg));
        navigate('/');

        //console.log('버튼 입력시 로그', userId);
    };

    return (
        <>
            {isPc ? (
                <IdResponsiveLayout>
                    <DecoWrapper className="mb-2">
                        <img src={AuthPageDeco} alt="AuthPageDeco" />
                    </DecoWrapper>
                    <LogoWrapper />
                    <TextWrapper>
                        <SmallText className="justify-center text-center font-bold">
                            HappyNewHere에서 사용하실 아이디를 알려주세요!
                        </SmallText>
                    </TextWrapper>
                    <IdInputForm>
                        <IdInputContainer>
                            <IdInputBar onChange={handleIdChange} />
                            <StateInputBar onChange={handleStateMsgChange} />
                            <IdSubmitButton onClick={handleStartClick} />
                        </IdInputContainer>
                    </IdInputForm>
                    <SnowManWrapper>
                        <img src={SnowMan} alt="SnowMan" />
                    </SnowManWrapper>
                </IdResponsiveLayout>
            ) : (
                <BackGround>
                    <IdResponsiveLayout>
                        <img className="mb-7" src={logo} alt="HappyHaedalLogo" />
                        <SmallText className="justify-center text-center font-bold">
                            HappyNewHere에서 사용하실
                        </SmallText>
                        <SmallText className="justify-center text-center font-bold">아이디를 알려주세요!</SmallText>
                        <IdInputForm>
                            <IdInputContainer>
                                <IdInputBar onChange={handleIdChange} />
                                <StateInputBar onChange={handleStateMsgChange} />
                                <IdSubmitButton onClick={handleStartClick} />
                            </IdInputContainer>
                        </IdInputForm>
                    </IdResponsiveLayout>
                </BackGround>
            )}
        </>
    );
};

export default IdTemplate;
