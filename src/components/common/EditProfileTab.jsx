import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import {
    StyledEditProfileTab,
    StyledEditProfileTabMobile,
    StyledHomeIcon,
} from '../organisms/EditProfile/ProfileHearderBar';
import backwardIcon from '../../assets/backwardIcon.svg';
import { SmallText } from '../../styles/text';
import homeIcon from '../../assets/home.svg';

const EditProfileTab = () => {
    const navigate = useNavigate();

    const isPc = useMediaQuery({
        query: '(min-width:768px)',
    });

    return (
        <>
            {isPc ? (
                <StyledEditProfileTab>
                    <SmallText fontSize="20px">프로필 편집</SmallText>
                </StyledEditProfileTab>
            ) : (
                <StyledEditProfileTabMobile>
                    <img src={backwardIcon} alt="backwardIcon" onClick={() => navigate(-1)} />
                    <SmallText fontSize="1.2rem">프로필 편집</SmallText>
                    <StyledHomeIcon src={homeIcon} alt="homeIcon" onClick={() => navigate('/')} />
                </StyledEditProfileTabMobile>
            )}
        </>
    );
};

export default EditProfileTab;
