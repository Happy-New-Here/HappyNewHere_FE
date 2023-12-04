import React from "react";
import BellSVG from "./BellSVG";

export const Calendar = {
  wrapper: ({ children }) => {
    return (
      <div className="w-[352px] h-[41px] flex justify-between items-start">
        {children}
      </div>
    );
  },

  getWeekDates: () => {
    const today = new Date();
    const day = today.getDay();

    // 현재 요일이 월요일(1)이 아닌 경우, 이전 월요일로 이동
    if (day !== 1) {
      today.setDate(today.getDate() - day + 1);
    }

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      weekDates.push(date);
    }

    return weekDates;
  },

  // 날짜 하나
  item: ({ day, date, onClick }) => {
    // 현재 요일에 따라 type 값을 설정
    let type = "navy";

    switch (day % 7) {
      case 0: // 일요일
        type = "red";
        break;
      case 1: // 월요일
        type = "navy";
        break;
      case 2: // 화요일
        type = "white";
        break;
      case 3: // 수요일
        type = "green";
        break;
      case 4: // 목요일
        type = "maroon";
        break;
      case 5: // 금요일
        type = "pink";
        break;
      case 6: // 토요일
        type = "yellow";
        break;
      default:
        break;
    }

    return (
      <div className="w-8 h-[40.73px] relative flex-col justify-start items-start inline-flex">
        <BellSVG type={type} date={date} onClick={() => onClick(date)} />
      </div>
    );
  },
};
