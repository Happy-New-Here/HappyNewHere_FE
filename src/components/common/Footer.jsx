import styled from "styled-components";
import chat from "../../assets/chat.svg";
import home from '../../assets/home.svg'
import search from "../../assets/search.svg";
import profileImg from "../../assets/MessagePaper1.png"
import { useNavigate } from "react-router-dom";
import React from 'react';

const StyledFooter = styled.div`
  display: flex;
  max-width: 768px;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
`;

const Footer = (props) => {

    const navigate = useNavigate();

    const togoHome = () => {
        navigate("/");
    }

    const togoSearch = () => {
        navigate("/search");
    }

    const { currentPage = "home" } = props;
    console.log(currentPage);

    return(
        <>
            <StyledFooter>
                <div className="flex justify-between items-center w-[360px] px-8 py-4">

                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
                    onClick = {togoHome}>
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
                            fill={currentPage === "home" ? "#9a0501" : "#909090" }
                        />
                        </svg>
                        <p className={`${currentPage === "home" ? 'text-[#9a0501]' : 'text-[#909090]'} flex-grow-0 flex-shrink-0 text-xs text-center`}>홈</p>
                    </div>

                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
                    onClick = {togoSearch}>
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
                            stroke= {currentPage === "search" ? "#9a0501" : "#909090" }
                            stroke-width={2}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <p className={`${currentPage === "search" ? 'text-[#9a0501]' : 'text-[#909090]'} flex-grow-0 flex-shrink-0 text-xs text-center`}>검색</p>
                    </div>

                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[7px]">
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
                            fill={currentPage === "chat" ? "#9a0501" : "#909090" }
                        />
                        </svg>
                        <p className={`${currentPage === "chat" ? 'text-[#9a0501]' : 'text-[#909090]'} flex-grow-0 flex-shrink-0 text-xs text-center`}>대화</p>
                    </div>
            
                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]">
                        <img className="flex-grow-0 flex-shrink-0 rounded-[50px]" src={profileImg} width={24} height={24} />
                        <p className={`${currentPage === "myPage" ? 'text-[#9a0501]' : 'text-[#909090]'} flex-grow-0 flex-shrink-0 text-xs text-center`}>My</p>
                    </div>

                </div>
            </StyledFooter>
        </>
    )
}

export default Footer;