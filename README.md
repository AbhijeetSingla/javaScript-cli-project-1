# Quiz

[<img src = "https://repl.it/badge/github/abhijeetsingla/neogcamp-cli-project-1" alt="run on repl.it" width = "250">](https://replit.com/@AbhijeetSingla/neogcamp-cli-project-1?embed=1&output=1)

# About

This quiz's questions are about me, indicating how much do you know me. It was made as a project to learn the basics of JavaScript, as is also shown in [neog.camp lesson-1](https://neog.camp/guide/lesson-one).

The quiz was made using a service called [repl.it](https://repl.it).

This service allows to run a CLI without much configuration, as it automatically installs the packages and has a smart IDE.

My repl.it profile - [repl.it/@abhijeetsingla](https://repl.it/@abhijeetsingla)

This code demonstrates the functionality of the following things:
- Arrays
- objects
- variables
- functions
- branching with conditions
- loops
- [readline-sync package](https://www.npmjs.com/package/readline-sync)

# Code

The code has 3 arrays of objects which define the **question bank**, including the 3 keys for each question, naming - question, answer and marks.

A function is defined (askQuestions) which loops and asks all the questions in a question bank. 

This quiz has 3 different question banks, which vary in terms of difficulty, which are presented to the user based on their score. There is also a "showAnger" function, which prints two different messages depending upon which question bank is being presented to the user, just because :P
