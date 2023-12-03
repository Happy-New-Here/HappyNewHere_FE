const messagePaperSRC = {
  1: "/src/assets/MessagePaper1.png",
  2: "/src/assets/MessagePaper2.png",
  3: "/src/assets/MessagePaper3.png",
};

// 편지지 바탕색에 따라 메시지 폰트 컬러 적용
export const messageFontColor = (selectedPaperNum) => {
  switch (selectedPaperNum) {
    case 1:
    case 3:
      return "black";
    case 2:
      return "white";
    default:
      return "unknown";
  }
};

export default messagePaperSRC;
