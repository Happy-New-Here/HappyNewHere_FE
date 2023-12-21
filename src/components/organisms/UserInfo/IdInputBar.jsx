const IdInputBar = ({ onChange }) => {
    return (
        <>
            <div className="w-full h-12 p-2.5 mb-3 bg-white rounded-[10px] border border-red-800 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="outline-none text-sm ml-2 w-full"
                    type="id"
                    placeholder="아이디를 입력해주세요"
                    onChange={onChange}
                />
            </div>
        </>
    );
};

export default IdInputBar;
