import { useNavigate } from 'react-router-dom';
import './NicknameTemplate.css';

const NicknameTemplate = () => {
    const navigate = useNavigate();

    // const handleButtonClick = () => {
    //     navigate('/');
    // };

    return (
        <>
            <section className="container">
                <div className="main-container">
                    <h1 className="title">Happy New Here</h1>
                    <p className="contents-container">
                        HappyNewHere에서 사용하실
                        <br />
                        아이디를 알려주세요!
                    </p>
                    <form className="form-container" action="">
                        {/* <form className="form-container" onSubmit={handleButtonClick} action=""> */}
                        <div className="input-container">
                            <input type="text" id="id" placeholder="아이디를 입력해주세요." className="input-item" />
                        </div>

                        <div className="button-container">
                            <button
                                type="submit"
                                className="button-item"
                                onClick={() => {
                                    navigate('/');
                                }}
                            >
                                시작하기
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default NicknameTemplate;
