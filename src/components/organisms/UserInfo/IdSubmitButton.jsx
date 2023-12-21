const IdSubmitButton = ({ onClick }) => {
    return (
        <>
            <button
                type="submit"
                className="w-full h-11 mt-1.5 bg-red-800 py-2 rounded-[10px] font-regular text-white transition duration-200 hover:bg-red-700 hover:border-red-700"
                onClick={onClick}
            >
                시작하기
            </button>
        </>
    );
};

export default IdSubmitButton;
