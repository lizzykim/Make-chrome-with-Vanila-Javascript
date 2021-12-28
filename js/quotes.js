const quotes =[
    {
        quote :"If you want to be a developer, act like one.",
        author :"Liz Kim",
    },
    {
        quote :"The road to success and the road to failure are almost exactly the same.",
        author :" Michael John Bobak",
    },
    {
        quote :"All progress takes place outside the comfort zone.",
        author :"Liz Kim",
    },
    {
        quote :"Success usually comes to those who are too busy to be looking for it.",
        author :"Henry David Thoreau",
    },
    {
        quote :"The way to get started is to quit talking and begin doing.",
        author :"Walt Disney",
    },
    {
        quote :"Success seems to be connected with action. Successful people keep moving. ",
        author :"Conrad Hilton",
    },
    {
        quote :"In order to succeed, we must first believe that we can",
        author :"Nikos Kazantzakis",
    },
    {
        quote :"The only place where success comes before work is in the dictionary.",
        author :"Vidal Sassoon",
    },
    {
        quote :"No one is you and that is your power.",
        author :"A",
    },
    {
        quote :"Make it happen. Shock everyone.",
        author :"B",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes =quotes[Math.floor(Math.random()*quotes.length)]; //Math.random 0이상 1미만, 인덱스가 0~9까지 필요하면 *9하고, 내림 하면 > 0.00~9.999 내림


//object에서 특성가셔오는 것 두 방식 상관없으나 위 방식으로 통일하기
quote.innerText = todaysQuotes.quote;
author.innerText =todaysQuotes["author"];