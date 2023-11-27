// 편지 쓰거나 보여주는 칸

import { React, useEffect } from "react";

const Message = () => {
  const handleMessageInputChange = () => {
    // 메시지 value 입력되었는지 체크
  };

  return (
    <div className="Message-container" style="width: 296px; height: 296px">
      {/* 백그라운드로 편지지 깔기 */}
      <form className="Message-text" style="width: 248px; height: 251px">
        {/* 텍스트 */}
        {/* 사용자 입력받을 편지 내용 */}
        <input
          type="text"
          placeholder="여기에 메시지를 입력하세요"
          value={messageInput}
          onChange={handleMessageInputChange}
          style="overflow: scroll"
        />
      </form>
    </div>
  );
};

export default Message;
