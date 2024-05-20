const quotes=[ //명언을 array 형태로 선언(객체)
    {
        quote: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Try not to become a man of success but rather to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "All you need in this life is ignorance and confidence; then success is sure.",
        author: "Mark Twain",
    },
    {
        quote: "If you can concentrate always on the present, you'll be a happy man.",
        author: "Paulo Cuelho",
    },
    {
        quote: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Everything comes to him who hustles while he waits.",
        author: "Thomas A. Edison",
    },
    {
        quote: "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        author: "Bob Dylan",
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "Tomorrow hopes we have learned something from yesterday.",
        author: "John Wayne",
    },
    {
        quote: "Love is an exploding cigar we willingly smoke.",
        author: "Lynda Barry",
    },
]
const quote = document.querySelector("#quote span:first-child") //quote, quthor 불러오기
const author = document.querySelector("#quote span:last-child") 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //명언이 10개에서 더 추가되거나 빠져도 문제가 없도록 해줌

quote.innerText = todaysQuote.quote; //화면에 quote, author 나오게끔 
author.innerText = todaysQuote.author;
