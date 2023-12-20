export const MessagePapersSRC = "/src/assets/MessagePapers";

export const MessageThumbnailsSRC = "/src/assets/MessageThumbnails";

// 편지지 컬러별 정렬
export const MessagePapers = [
  {
    id: 0, // Sunday
    color: "Red",
    name: ["Puppy.svg", "Santa.svg", "Together.svg", "Town.svg"],
  },
  {
    id: 1,
    color: "Navy",
    name: ["Puppy.svg", "Santa.svg", "Together.svg", "Town.svg"],
  },
  {
    id: 2,
    color: "White",
    name: ["Puppy.svg", "Santa.svg", "Together.svg", "Town.svg"],
  },
  {
    id: 3,
    color: "Green",
    name: ["Puppy.svg", "Santa.svg", "Together.svg", "Town.svg"],
  },
  {
    id: 4,
    color: "Brown",
    name: ["Puppy.svg", "Santa.svg", "Together.svg", "Town.svg"],
  },
  {
    id: 5,
    color: "Pink",
    name: ["Puppy.svg", "Santa.svg", "Together.svg", "Town.svg"],
  },
  {
    id: 6,
    color: "Yellow",
    name: ["Puppy.svg", "Santa.svg", "Together.svg", "Town.svg"],
  },
];

// 편지지 바탕색에 따라 메시지 폰트 컬러 적용
export const MessageFontColor = (selectedPaperNum) => {
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
