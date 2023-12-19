import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import profileImg from "../../assets/MessagePapers/Brown/Puppy.svg";
import { useNavigate } from "react-router-dom";
import React from "react";

const PCFooter = styled.div`
  display: flex;
  width: 156px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const MobileFooter = styled.div`
  display: flex;
  max-width: 767px;
  padding: 32px 16px;
  justify-content: space-between;
  align-items: center;
`;

const Footer = (props) => {
  const navigate = useNavigate();

  const togoHome = () => {
    navigate("/");
  };

  const togoSearch = () => {
    navigate("/search");
  };

  const { currentPage = "home", isPc } = props;
  console.log(currentPage);

  return (
    <>
      {isPc ? (
        <PCFooter>
          <div className="flex flex-col justify-start items-start w-[156px] gap-5 px-4 py-8">
            {/* 홈 */}
            <button
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
              onClick={togoHome}
            >
              <svg
                width={12}
                height={14}
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M0.857143 12.9088H4.02171V7.86454H7.97829V12.9088H11.1429V5.19454L6 1.30483L0.857143 5.19454V12.9088ZM0 13.766V4.76597L6 0.233398L12 4.76597V13.766H7.12114V8.72168H4.87886V13.766H0Z"
                  fill={currentPage === "home" ? "#9a0501" : "#909090"}
                />
              </svg>
              <p
                className={`${currentPage === "home" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                홈
              </p>
            </button>

            {/* 검색 */}
            <button
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
              onClick={togoSearch}
            >
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M13 13L9 9M1 5.66667C1 6.2795 1.12071 6.88634 1.35523 7.45252C1.58975 8.01871 1.93349 8.53316 2.36683 8.9665C2.80018 9.39984 3.31462 9.74358 3.88081 9.97811C4.447 10.2126 5.05383 10.3333 5.66667 10.3333C6.2795 10.3333 6.88634 10.2126 7.45252 9.97811C8.01871 9.74358 8.53316 9.39984 8.9665 8.9665C9.39984 8.53316 9.74358 8.01871 9.97811 7.45252C10.2126 6.88634 10.3333 6.2795 10.3333 5.66667C10.3333 5.05383 10.2126 4.447 9.97811 3.88081C9.74358 3.31462 9.39984 2.80018 8.9665 2.36683C8.53316 1.93349 8.01871 1.58975 7.45252 1.35523C6.88634 1.12071 6.2795 1 5.66667 1C5.05383 1 4.447 1.12071 3.88081 1.35523C3.31462 1.58975 2.80018 1.93349 2.36683 2.36683C1.93349 2.80018 1.58975 3.31462 1.35523 3.88081C1.12071 4.447 1 5.05383 1 5.66667Z"
                  stroke={currentPage === "search" ? "#9a0501" : "#909090"}
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p
                className={`${currentPage === "search" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                검색
              </p>
            </button>

            {/* 대화 */}
            <button className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6 10.9004C9.3135 10.9004 12 8.54989 12 5.65039C12 2.75089 9.3135 0.400391 6 0.400391C2.6865 0.400391 0 2.75089 0 5.65039C0 6.97039 0.55725 8.17789 1.4775 9.10039C1.40475 9.86239 1.16475 10.6979 0.89925 11.3249C0.84 11.4644 0.95475 11.6204 1.104 11.5964C2.796 11.3189 3.80175 10.8929 4.239 10.6709C4.81343 10.8241 5.40549 10.9013 6 10.9004Z"
                  fill={currentPage === "chat" ? "#9a0501" : "#909090"}
                />
              </svg>
              <p
                className={`${currentPage === "chat" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                대화
              </p>
            </button>

            {/* 마이페이지 */}
            <button className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]">
              <img
                className="flex-grow-0 flex-shrink-0 rounded-[50px]"
                src={profileImg}
                width={12}
                height={12}
              />
              <p
                className={`${currentPage === "myPage" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                마이페이지
              </p>
            </button>
          </div>
          ;
        </PCFooter>
      ) : (
        <MobileFooter className="flex h-screen">
          <div className="flex justify-between items-center w-full px-8 py-4 fixed bottom-0 left-0 right-0 bg-white border-t border-gray">
            <button
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
              onClick={togoHome}
            >
              <svg
                width={16}
                height={18}
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z"
                  fill={currentPage === "home" ? "#9a0501" : "#909090"}
                />
              </svg>
              <p
                className={`${currentPage === "home" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                홈
              </p>
            </button>

            <button
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
              onClick={togoSearch}
            >
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M19.8334 19L13.8334 13M1.83337 8C1.83337 8.91925 2.01443 9.82951 2.36622 10.6788C2.718 11.5281 3.23362 12.2997 3.88363 12.9497C4.53364 13.5998 5.30531 14.1154 6.15459 14.4672C7.00387 14.8189 7.91412 15 8.83337 15C9.75263 15 10.6629 14.8189 11.5122 14.4672C12.3614 14.1154 13.1331 13.5998 13.7831 12.9497C14.4331 12.2997 14.9487 11.5281 15.3005 10.6788C15.6523 9.82951 15.8334 8.91925 15.8334 8C15.8334 7.08075 15.6523 6.1705 15.3005 5.32122C14.9487 4.47194 14.4331 3.70026 13.7831 3.05025C13.1331 2.40024 12.3614 1.88463 11.5122 1.53284C10.6629 1.18106 9.75263 1 8.83337 1C7.91412 1 7.00387 1.18106 6.15459 1.53284C5.30531 1.88463 4.53364 2.40024 3.88363 3.05025C3.23362 3.70026 2.718 4.47194 2.36622 5.32122C2.01443 6.1705 1.83337 7.08075 1.83337 8Z"
                  stroke={currentPage === "search" ? "#9a0501" : "#909090"}
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p
                className={`${currentPage === "search" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                검색
              </p>
            </button>

            <button className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[7px]">
              <svg
                width={21}
                height={18}
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M10.6667 0C16.1667 0 20.6667 3.58 20.6667 8C20.6667 12.42 16.1667 16 10.6667 16C9.42669 16 8.23669 15.82 7.13669 15.5C4.21669 18 0.666687 18 0.666687 18C2.99669 15.67 3.36669 14.1 3.41669 13.5C1.71669 12.07 0.666687 10.13 0.666687 8C0.666687 3.58 5.16669 0 10.6667 0Z"
                  fill={currentPage === "chat" ? "#9a0501" : "#909090"}
                />
              </svg>
              <p
                className={`${currentPage === "chat" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                대화
              </p>
            </button>

            <button className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]">
              <img
                className="flex-grow-0 flex-shrink-0 rounded-[50px]"
                src={profileImg}
                width={24}
                height={24}
              />
              <p
                className={`${currentPage === "myPage" ? "text-[#9a0501]" : "text-[#909090]"} 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                My
              </p>
            </button>
          </div>
        </MobileFooter>
      )}
    </>
  );
};

export default Footer;
