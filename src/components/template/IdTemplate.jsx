import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.svg';

const IdTemplate = () => {
    const navigate = useNavigate();

    const [idValue, setIdValue] = useState('');
    const [stateMsgValue, setStateMsgValue] = useState('');

    const saveUserId = (e) => {
        setIdValue(e.target.value);
        console.log(e.target.value);
    };

    const saveUserStateMsg = (e) => {
        setStateMsgValue(e.target.value);
        console.log(e.target.value);
    };

    /*
    .wrapper {
        display: grid;
        place-items: center;
        min-height: 100dvh;
        background: navy;
    } 
    .content {
        padding: 3rem;
        font-size: 2rem;
        border-radius: 1rem;
        backround: coral;
    }
    */

    return (
        <>
            <section className="mx-auto">
                <div className="p-16 bg-amber-50">
                    <div className="w-[180px] h-9 mb-10 mx-auto relative">
                        <img src={logo} alt="logo" className="w-[181px] h-9 top-0 absolute" />
                    </div>
                    <p className="text-center text-lg">
                        HappyNewHere에서 사용하실 <br />
                        아이디를 알려주세요!
                    </p>
                    <form className="mt-8" action="">
                        {/* <form className="form-container" onSubmit={handleButtonClick} action=""> */}
                        <div className="input-container">
                            <div className="w-full h-11 p-2.5 mb-3 bg-white rounded-[10px] border border-red-800 justify-start items-center gap-2.5 inline-flex">
                                {/* 아이디 입력창 */}
                                <input
                                    type="text"
                                    id="id"
                                    placeholder="아이디를 입력해주세요(필수)"
                                    className="w-full"
                                    value={idValue}
                                    onChange={saveUserId}
                                />
                            </div>
                            <div className="w-full h-11 p-2.5 mb-3 bg-white rounded-[10px] border border-red-800 justify-start items-center gap-2.5 inline-flex">
                                {/* 상태메세지 입력창 */}
                                <input
                                    type="text"
                                    id="state"
                                    placeholder="상태메세지를 입력해주세요(선택)"
                                    className="w-full"
                                    value={stateMsgValue}
                                    onChange={saveUserStateMsg}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-red-800 py-2 rounded-full font-semibold text-white transition duration-200 hover:bg-red-700 hover:border-red-700"
                                    onClick={() => {
                                        navigate('/');
                                    }}
                                >
                                    시작하기
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default IdTemplate;
