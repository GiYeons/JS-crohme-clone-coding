const quotes = [
  {
    quote: "이렇게 내 일생중에 제일 좋았던 나날들이 없었던 거 같여",
    author: "방국봉",
  },
  {
    quote: "빱댁 나가 친구니께...",
    author: "나왕눈",
  },
  {
    quote: "나는 말의 힘을 믿는 편이여",
    author: "박람지",
  },
  {
    quote: "자빱아 뭘 기대했어?",
    author: "???",
  },
  {
    quote: "다시 가져가십세요.",
    author: "고요태",
  },
  {
    quote: "아 진짜요?",
    author: "김복수",
  },
  {
    quote: "오늘은 악몽 좀 안 꿨으면 좋겠다",
    author: "마우수",
  },
  {
    quote: "진심으로 그런 평화로운 삶이 오기를 간절히 빌어본다",
    author: "류도롱",
  },
  {
    quote: "사랑하는 알락이가 나를 배신했는데도 불구하고 나는 왜 포기할 수 없는 걸까?",
    author: "팽귄",
  },
  {
    quote: "아마 나는 다시 도전해보고 싶었나 봐.",
    author: "팽귄",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
