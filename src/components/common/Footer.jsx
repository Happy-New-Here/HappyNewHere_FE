import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const PCFooter = styled.div``;

const MobileFooter = styled.div``;

const FooterProfileImg = styled.img`
  background: url(${(props) => props.backgroundImg}) center/cover;
`;

const Footer = () => {
  const accessToken = localStorage.getItem("accessToken"); // 로컬스토리지의 엑세스토큰 불러오기
  const profileImg = localStorage.getItem("profileImg");
  const currentPage = useSelector((state) => state.currentPage);

  const navigate = useNavigate();

  const togoHome = () => {
    navigate("/");
  };

  const togoSearch = () => {
    navigate("/search");
  };

  const togoChatting = () => {
    navigate("/chatting");
  };

  const togoMypage = () => {
    navigate("/editprofile");
  };

  const togoInfo = () => {
    navigate("/manual");
  };

  const havetoLogin = () => {
    alert("로그인 후 이용 가능합니다.");
    navigate("/auth");
  };

  const handleLoginIconClick = () => {
    navigate("/auth");
  };

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <>
      {isPc ? (
        <PCFooter className="w-full flex flex-col justify-start items-start w-[156px] gap-5 px-4 py-8">
          {/* 홈 */}
          <button
            className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
            onClick={accessToken ? togoHome : havetoLogin}
          >
            <svg
              width={12}
              height={14}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M0.857143 12.9088H4.02171V7.86454H7.97829V12.9088H11.1429V5.19454L6 1.30483L0.857143 5.19454V12.9088ZM0 13.766V4.76597L6 0.233398L12 4.76597V13.766H7.12114V8.72168H4.87886V13.766H0Z"
                fill={currentPage === "/" ? "#9a0501" : "#909090"}
              />
            </svg>
            <p
              className={`${
                currentPage === "/" ? "text-[#9a0501]" : "text-[#909090]"
              } 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
            >
              홈
            </p>
          </button>

          {/* 검색 */}
          <button
            className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
            onClick={accessToken ? togoSearch : havetoLogin}
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M13 13L9 9M1 5.66667C1 6.2795 1.12071 6.88634 1.35523 7.45252C1.58975 8.01871 1.93349 8.53316 2.36683 8.9665C2.80018 9.39984 3.31462 9.74358 3.88081 9.97811C4.447 10.2126 5.05383 10.3333 5.66667 10.3333C6.2795 10.3333 6.88634 10.2126 7.45252 9.97811C8.01871 9.74358 8.53316 9.39984 8.9665 8.9665C9.39984 8.53316 9.74358 8.01871 9.97811 7.45252C10.2126 6.88634 10.3333 6.2795 10.3333 5.66667C10.3333 5.05383 10.2126 4.447 9.97811 3.88081C9.74358 3.31462 9.39984 2.80018 8.9665 2.36683C8.53316 1.93349 8.01871 1.58975 7.45252 1.35523C6.88634 1.12071 6.2795 1 5.66667 1C5.05383 1 4.447 1.12071 3.88081 1.35523C3.31462 1.58975 2.80018 1.93349 2.36683 2.36683C1.93349 2.80018 1.58975 3.31462 1.35523 3.88081C1.12071 4.447 1 5.05383 1 5.66667Z"
                stroke={currentPage === "/search" ? "#9a0501" : "#909090"}
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p
              className={`${
                currentPage === "/search" ? "text-[#9a0501]" : "text-[#909090]"
              } 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
            >
              검색
            </p>
          </button>

          {/* 채팅 */}
          <button
            className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
            onClick={accessToken ? togoChatting : havetoLogin}
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M6 10.9004C9.3135 10.9004 12 8.54989 12 5.65039C12 2.75089 9.3135 0.400391 6 0.400391C2.6865 0.400391 0 2.75089 0 5.65039C0 6.97039 0.55725 8.17789 1.4775 9.10039C1.40475 9.86239 1.16475 10.6979 0.89925 11.3249C0.84 11.4644 0.95475 11.6204 1.104 11.5964C2.796 11.3189 3.80175 10.8929 4.239 10.6709C4.81343 10.8241 5.40549 10.9013 6 10.9004Z"
                fill={currentPage === "/chatting" ? "#9a0501" : "#909090"}
              />
            </svg>
            <p
              className={`${
                currentPage === "/chatting"
                  ? "text-[#9a0501]"
                  : "text-[#909090]"
              } 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
            >
              채팅
            </p>
          </button>

          {/* 도움말 */}
          <button
            className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
            onClick={togoInfo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.96659 11.9997C8.19992 11.9997 8.39725 11.919 8.55859 11.7577C8.71992 11.5963 8.80036 11.3992 8.79992 11.1663C8.79992 10.933 8.71947 10.7357 8.55859 10.5743C8.3977 10.413 8.20036 10.3326 7.96659 10.333C7.73325 10.333 7.53614 10.4137 7.37525 10.575C7.21436 10.7363 7.1337 10.9335 7.13325 11.1663C7.13325 11.3997 7.21392 11.597 7.37525 11.7583C7.53659 11.9197 7.7337 12.0001 7.96659 11.9997ZM7.36659 9.43301H8.59992C8.59992 9.06634 8.6417 8.77745 8.72525 8.56634C8.80881 8.35523 9.04481 8.06634 9.43325 7.69967C9.72214 7.41079 9.94992 7.13567 10.1166 6.87434C10.2833 6.61301 10.3666 6.29923 10.3666 5.93301C10.3666 5.31079 10.1388 4.83301 9.68325 4.49967C9.2277 4.16634 8.68881 3.99967 8.06659 3.99967C7.43325 3.99967 6.91947 4.16634 6.52525 4.49967C6.13103 4.83301 5.85592 5.23301 5.69992 5.69967L6.79992 6.13301C6.85547 5.93301 6.98059 5.71634 7.17525 5.48301C7.36992 5.24967 7.66703 5.13301 8.06659 5.13301C8.42214 5.13301 8.68881 5.23034 8.86659 5.42501C9.04436 5.61967 9.13325 5.83345 9.13325 6.06634C9.13325 6.28856 9.06659 6.49701 8.93325 6.69167C8.79992 6.88634 8.63325 7.06679 8.43325 7.23301C7.94436 7.66634 7.64436 7.99412 7.53325 8.21634C7.42214 8.43856 7.36659 8.84412 7.36659 9.43301ZM7.99992 14.6663C7.0777 14.6663 6.21103 14.4915 5.39992 14.1417C4.58881 13.7919 3.88325 13.3168 3.28325 12.7163C2.68325 12.1163 2.20836 11.4108 1.85859 10.5997C1.50881 9.78856 1.3337 8.9219 1.33325 7.99967C1.33325 7.07745 1.50836 6.21079 1.85859 5.39967C2.20881 4.58856 2.6837 3.88301 3.28325 3.28301C3.88325 2.68301 4.58881 2.20812 5.39992 1.85834C6.21103 1.50856 7.0777 1.33345 7.99992 1.33301C8.92214 1.33301 9.78881 1.50812 10.5999 1.85834C11.411 2.20856 12.1166 2.68345 12.7166 3.28301C13.3166 3.88301 13.7917 4.58856 14.1419 5.39967C14.4921 6.21079 14.667 7.07745 14.6666 7.99967C14.6666 8.9219 14.4915 9.78856 14.1413 10.5997C13.791 11.4108 13.3161 12.1163 12.7166 12.7163C12.1166 13.3163 11.411 13.7915 10.5999 14.1417C9.78881 14.4919 8.92214 14.6668 7.99992 14.6663ZM7.99992 13.333C9.48881 13.333 10.7499 12.8163 11.7833 11.783C12.8166 10.7497 13.3333 9.48856 13.3333 7.99967C13.3333 6.51079 12.8166 5.24967 11.7833 4.21634C10.7499 3.18301 9.48881 2.66634 7.99992 2.66634C6.51103 2.66634 5.24992 3.18301 4.21659 4.21634C3.18325 5.24967 2.66659 6.51079 2.66659 7.99967C2.66659 9.48856 3.18325 10.7497 4.21659 11.783C5.24992 12.8163 6.51103 13.333 7.99992 13.333Z"
                fill={currentPage === "/manual" ? "#9a0501" : "#909090"}
              />
            </svg>
            <p
              className={`${
                currentPage === "/manual" ? "text-[#9a0501]" : "text-[#909090]"
              } 
                        flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
            >
              도움말
            </p>
          </button>

          {/* 마이페이지 / 로그인 */}
          {accessToken ? (
            <button
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
              onClick={togoMypage}
            >
              <FooterProfileImg
                className={`${
                  currentPage === "/editprofile"
                    ? "border-[1px] border-[#9a0501]"
                    : "border-[0.3px] border-[#909090]"
                } flex-grow-0 flex-shrink-0 rounded-[50px] border-solid `}
                width={`${currentPage === "/editprofile" ? "13" : 12}`}
                height={`${currentPage === "/editprofile" ? "13" : 12}`}
                backgroundImg={profileImg}
              />
              <p
                className={`${
                  currentPage === "/editprofile"
                    ? "text-[#9a0501]"
                    : "text-[#909090]"
                } flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                마이페이지
              </p>
            </button>
          ) : (
            <button
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[140px] relative gap-[25px]"
              onClick={handleLoginIconClick}
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path d="M14 1H21V19H14" stroke="#909090" stroke-width="2" />
                <path
                  d="M15.7071 11.2364C16.0976 10.8459 16.0976 10.2127 15.7071 9.82219L9.34315 3.45823C8.95262 3.0677 8.31946 3.0677 7.92893 3.45823C7.53841 3.84875 7.53841 4.48192 7.92893 4.87244L13.5858 10.5293L7.92893 16.1862C7.53841 16.5767 7.53841 17.2098 7.92893 17.6004C8.31946 17.9909 8.95262 17.9909 9.34315 17.6004L15.7071 11.2364ZM0 11.5293H15V9.5293H0V11.5293Z"
                  fill="#909090"
                />
              </svg>
              <p
                className={`text-[#909090] flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                로그인
              </p>
            </button>
          )}
        </PCFooter>
      ) : (
        // 모바일 화면
        <MobileFooter className="w-full h-[77px] flex justify-between items-center fixed bottom-0 left-0 right-0 bg-white border-t border-gray">
          {/* 홈 */}
          <button
            className="w-1/4 h-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
            onClick={accessToken ? togoHome : havetoLogin}
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
                fill={currentPage === "/" ? "#9a0501" : "#909090"}
              />
            </svg>
            <p
              className={`${
                currentPage === "/" ? "text-[#9a0501]" : "text-[#909090]"
              } flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
            >
              홈
            </p>
          </button>

          {/* 검색 */}
          <button
            className="w-1/4 h-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
            onClick={accessToken ? togoSearch : havetoLogin}
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
                stroke={currentPage === "/search" ? "#9a0501" : "#909090"}
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p
              className={`${
                currentPage === "/search" ? "text-[#9a0501]" : "text-[#909090]"
              } flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
            >
              검색
            </p>
          </button>

          {/* 채팅  */}
          <button
            className="w-1/4 h-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
            onClick={accessToken ? togoChatting : havetoLogin}
          >
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
                fill={currentPage === "/chatting" ? "#9a0501" : "#909090"}
              />
            </svg>
            <p
              className={`${
                currentPage === "/chatting"
                  ? "text-[#9a0501]"
                  : "text-[#909090]"
              } flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
            >
              채팅
            </p>
          </button>

          {/* 마이페이지 / 로그인 */}
          {accessToken ? (
            <button
              className="w-1/4 h-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
              onClick={togoMypage}
            >
              <FooterProfileImg
                className={`${
                  currentPage === "/editprofile"
                    ? "border-[2px] border-[#9a0501]"
                    : "border-[0.3px] border-[#909090]"
                } flex-grow-0 flex-shrink-0 rounded-[50px] border-solid `}
                width={`${currentPage === "/editprofile" ? "26" : 24}`}
                height={`${currentPage === "/editprofile" ? "26" : 24}`}
                backgroundImg={profileImg}
              />
              <p
                className={`${
                  currentPage === "/editprofile"
                    ? "text-[#9a0501]"
                    : "text-[#909090]"
                } flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                My
              </p>
            </button>
          ) : (
            <button
              className="w-1/4 h-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
              onClick={handleLoginIconClick}
            >
              <svg
                width={21}
                height={19}
                viewBox="0 0 25 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path d="M14 1H21V19H14" stroke="#909090" stroke-width="2" />
                <path
                  d="M15.7071 11.2364C16.0976 10.8459 16.0976 10.2127 15.7071 9.82219L9.34315 3.45823C8.95262 3.0677 8.31946 3.0677 7.92893 3.45823C7.53841 3.84875 7.53841 4.48192 7.92893 4.87244L13.5858 10.5293L7.92893 16.1862C7.53841 16.5767 7.53841 17.2098 7.92893 17.6004C8.31946 17.9909 8.95262 17.9909 9.34315 17.6004L15.7071 11.2364ZM0 11.5293H15V9.5293H0V11.5293Z"
                  fill="#909090"
                />
              </svg>
              <p
                className={`text-[#909090] flex-grow-0 flex-shrink-0 text-xs text-center hover:font-semibold`}
              >
                로그인
              </p>
            </button>
          )}
        </MobileFooter>
      )}
    </>
  );
};

export default Footer;
