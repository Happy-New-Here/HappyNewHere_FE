// 편지지 선택 시 보여줄 편지지 썸네일 한 개
// 각 썸네일마다 고유 번호 필요
// 선택 가능하게 radio로 할 것
// PaperNum은 template에서 차례대로 부여 <MessagePaperThumbnail value="">

import React from "react";

const MessagePaperThumbnail = (ㅔ) => {
  return (
    <>
      <div
        className="MessagePaperThumbnail"
        style="width: 60px; height: 60px"
      ></div>
      <input type="radio" name="PaperNum" />
    </>
  );
};

export default MessagePaperThumbnail;
