var readlineSync = require("readline-sync");

var questionBankZero = [
  { q: "What's my age?", a: "23", marks: 1},  
  { q: "My favorite game?", a: "life", marks: 1},
  { q: "What's my favorite pet?", a: "cat", marks: 3},
];

var questionBankOne = [
  { q: "Which combination of colors of cat is my favorite?", a: "black and white", marks: 1},  
  { q: "What's my favorite pass time?", a: "time pass", marks: 1},
  { q: "Name my wallet", a: "ashish", marks: 3},
];

var questionBankTwo = [
  { q: "My favorite smartphone(write the full name)?", a: "samsung galaxy note 10", marks: 1},  
  { q: "My favorite youtube channel?", a: "linustechtips", marks: 3}
];

var level = 0;
var score = 0;
var space = " ";

function showAnger () {
  level++;
  if (level === 1){
  console.log("--------------------------------");
  console.log("Oh! so you think you're smart");
  console.log("Answer these questions -^-");
  console.log("--------------------------------");
  } else {
    console.log("--------------------------------");
    console.log("Ohhhhoohhoooo! you are so DEAD!!!");
    console.log("--------------------------------");
  }
}

function askQuestions (quesbank){
  for (fa = 0; fa < quesbank.length; fa++){
    var userAns = readlineSync.question(quesbank[fa].q + space);
    if (userAns.toLowerCase() === quesbank[fa].a){
      console.log("You are right!");
      console.log("--------------------------------");
      score = score + quesbank[fa].marks;
    } else {
      console.log("You are wrong!");
      console.log("--------------------------------");
      score--;
    }
  }
}

console.log("Welcome to the quiz about how much you know about me!");
var userName = readlineSync.question("What's your name?" + space);
var welcomeMessage = "Welcome" + space + userName;
console.log(welcomeMessage);
console.log("--------------------------------");
askQuestions(questionBankZero);
if (score >= 4) {
  showAnger();
  askQuestions(questionBankOne);
  if (score >= 9) {
    showAnger();
    askQuestions(questionBankTwo);
  }
}

if (score >= 10){
  console.log("--------------------------------");
  console.log("Well DAYUMMMM!!");
  console.log("Your score is:" + space + score);
} else {
  console.log("--------------------------------");
  console.log("not so bright, are you!?");
  console.log("Your score is:" + space + score);
}