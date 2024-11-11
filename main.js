const btn = document.getElementById("btn");
const person = document.getElementsByClassName("person-name")[0];
const quote =document.getElementsByClassName("quote")[0];

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", person: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", person: "Ralph Waldo Emerson" },
    { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
    { quote: "It is never too late to be what you might have been.", person: "George Eliot" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson" },
    { quote: "You must be the change you wish to see in the world.", person: "Mahatma Gandhi" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", person: "Roy T. Bennett" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
    { quote: "Life is really simple, but we insist on making it complicated.", person: "Confucius" }
  ];
  

btn.addEventListener("click", ()=>{
    let random =Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    

});