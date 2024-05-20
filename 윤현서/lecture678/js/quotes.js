const quotes = [
    {
        quote : "Be yourself; everyone else is already taken.",
        author : "Oscar Wilde",
    },
    {
        quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author : "Albert Einstein",
    },
    {
        quote : "A room without books is like a body without a soul.",
        author : "Marcus Tullius Cicero",
    },
    {
        quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author : "Dr. Seuss",
    },
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West",
    },
    {
        quote : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain",
    },
    {
        quote : "A friend is someone who knows all about you and still loves you.",
        author : "Elbert Hubbard",
    },
    {
        quote : "We accept the love we think we deserve.",
        author : "Stephen Chbosky, The Perks of Being a Wallflower",
    },
    {
        quote : "Knowing yourself is the beginning of all wisdom.",
        author : "Aristotle",
    },
    {
        quote : "Perhaps one did not want to be loved so much as to be understood.",
        author : "George Orwell",
    },
];
const quote = document.querySelector("#quote span:first-child"); //명언 가져오기
const author = document.querySelector("#quote span:last-child"); //작가 가져오기

/* randomness */
// Math.random() : 0~1 사이의 수 반환

// 0에서 9까지의 숫자 얻기
// Math.floor(Math.random() * 10)
// 올림함수 Math.ceil : 9.8 = 10
// 내림함수 Math.floor : 9.8 = 9
// 반올림함수 Math.round : 9.8 = 10, 9.3 = 9
console.log(quotes[Math.floor(Math.random()*10)]);

//10대신 Array의 길이를 사용해서 upgrade
//array이름.length
console.log(quotes[Math.floor(Math.random()*quotes.length)]);

//랜덤 명언 저장 변수
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;