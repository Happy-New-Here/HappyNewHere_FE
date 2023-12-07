import React, { useState } from "react";
import GiftBox from "../common/GiftBox";
import MessageList from "../organisms/Message/MessageList";
import MessageViewOrganism from "../organisms/Message/MessageViewOrganism";
import { Calendar } from "../common/Calendar";

const HomeTemplate = () => {
  let weekDates = Calendar.getWeekDates(18);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

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
      {/* <GiftBox /> */}
      <MessageList />
      {selectedDate && (
        <div>
          선택한 날짜: {selectedDate.toDateString()}
          {/* 선택한 날짜에 따른 메시지 목록 또는 내용을 여기에 표시 */}
        </div>
      )}
      <MessageViewOrganism />
    </>
  );
};

export default HomeTemplate;
