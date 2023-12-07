import { LuSearch } from "react-icons/lu";

const SearchBar = ({ onClick }) => {
    return (
        <div className="flex flex-row justify-center rounded-full bg-gray-200 h-8 w-72 md:w-10/12 px-3.5 py-1.5 ">
            <LuSearch
                size="19"
                color="#909090"
                onClick={onClick}
            />
            <input
                type="text"
                className="outline-none text-xs bg-gray-200 ml-2 w-full"
                placeholder="검색"
            />
        </div>
    )
}

export default SearchBar;