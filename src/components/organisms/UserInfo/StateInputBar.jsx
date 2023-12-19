const StateInputBar = ({ value, onChange }) => {
    return (
        // <div className="flex flex-row justify-center rounded-full bg-gray-200 h-8 w-72 md:w-10/12 px-3.5 py-1.5 ">
        <div className="w-full h-12 p-2.5 mb-3 bg-white rounded-[10px] border border-red-800 justify-start items-center gap-2.5 inline-flex">
            <input
                className="outline-none text-sm ml-2 w-full"
                type="StateMsg"
                placeholder="상태메세지를 입력해주세요"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default StateInputBar;
