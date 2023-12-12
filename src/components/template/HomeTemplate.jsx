import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import GiftBox from "../common/GiftBox";
import MessageList from "../organisms/Message/MessageList";
import MessageViewOrganism from "../organisms/Message/MessageViewOrganism";
import { Calendar } from "../common/Calendar";
import Footer from "../common/Footer";

const HomeTemplate = () => {
  let weekDates = Calendar.getWeekDates(25); // 이벤트 시작날짜 설정
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };


  const isPc = useMediaQuery({
    query: "(min-width:768px)"
});

  return (
    <>
      홈 템플릿입니다.
      <Calendar.wrapper>
        {weekDates.map((date, index) => (
          <Calendar.item
            key={index}
            day={date.getDay()}
            date={date.getDate()}
            onClick={() => handleDateClick(date)}
          />
        ))}
      </Calendar.wrapper>
      <GiftBox />
      {selectedDate && (
        <div>
          선택한 날짜: {selectedDate.toDateString()}
          {/* 선택한 날짜에 따른 메시지 목록 또는 내용을 여기에 표시 */}
        </div>
      )}
      <MessageViewOrganism />
      <Footer currentPage="home" isPc={isPc} />
    </>
  );
};

export default HomeTemplate;
