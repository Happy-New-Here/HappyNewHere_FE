import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/happynewhere_logo 1.svg';
import idSlice, { inInputActions } from '../../store/id-Slice';
import { idResult } from '../../store/id-action';
import Header from '../common/Header';

const IdTemplate = () => {
    const dispatch = useDispatch();

    const userId = useSelector((state) => state.id.id);
    const paging = 0;

    const idInputHandler = () => {
        dispatch(inInputActions.Id({ id: 'test' }));
    };

    const [idValue, setIdValue] = useState('');

    const saveUserId = (e) => {
        dispatch(inInputActions.Id({ id: e.target.value }));
    };

    // const idSubmit = async () => {
    //     //console.log(formData);
    //     // idResult(userId, paging);
    // };

    const idSubmit = () => {
        dispatch;
    };

    return (
        <>
            <section className="mx-auto">
                <div className="p-16 bg-amber-50">
                    <div className="w-[180px] h-12 mb-10 mx-auto relative">
                        <Header />
                    </div>
                    <p className="text-center text-lg">
                        HappyNewHere에서 사용하실 <br />
                        아이디를 알려주세요!
                    </p>
                    <form className="mt-8">
                        {' '}
                        {/*onSubmit={handleSubmit(onSubmit)}> */}
                        <div className="input-container">
                            <div className="w-full h-11 p-2.5 mb-3 bg-white rounded-[10px] border border-red-800 justify-start items-center gap-2.5 inline-flex">
                                {/* 아이디 입력창 */}
                                <input
                                    type="id"
                                    id="id"
                                    placeholder="아이디를 입력해주세요(필수)"
                                    className="w-full"
                                    value={idValue}
                                    onChange={(e) => setIdValue(e.target.value)}
                                />
                            </div>
                            <div className="w-full h-11 p-2.5 mb-3 bg-white rounded-[10px] border border-red-800 justify-start items-center gap-2.5 inline-flex">
                                {/* 상태메세지 입력창 */}
                                <input
                                    type="text"
                                    id="state"
                                    placeholder="상태메세지를 입력해주세요(선택)"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-red-800 py-2 rounded-full font-semibold text-white transition duration-200 hover:bg-red-700 hover:border-red-700"
                                    onClick={() => {
                                        idSubmit();
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
