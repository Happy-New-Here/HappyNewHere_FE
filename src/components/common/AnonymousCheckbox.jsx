import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setIsAnonymous } from "../../store/isAnonymousSlice";

const StyledAnonymousCheckbox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const AnonymousCheckbox = () => {
  const dispatch = useDispatch();
  const isAnonymous = useSelector((state) => state.isAnonymous);

  const handleCheckAnonymous = () => {
    dispatch(setIsAnonymous(!isAnonymous));
  };

  // 확인용
  // useEffect(() => {
  //   console.log(`isAnonymous: ${isAnonymous}`);
  // }, [isAnonymous]);

  return (
    <StyledAnonymousCheckbox>
      <label>익명으로 보내기&nbsp;</label>
      <input type="checkbox" checked={isAnonymous} onChange={handleCheckAnonymous} />
    </StyledAnonymousCheckbox>
  );
};

export default AnonymousCheckbox;
