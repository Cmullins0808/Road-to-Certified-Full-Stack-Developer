const questions = [ 
  {
   category: "Math",
   question: "What is 3 + 4?",
   choices: ["1", "7", "24"],
   answer: "7"
},
  {
   category: "Math",
   question: "What is 1 + 4?",
   choices: ["1", "5", "24"],
   answer: "5"
},
{
   category: "Math",
   question: "What is 20 + 4?",
   choices: ["1", "7", "24"],
   answer: "24"
},
{
   category: "Math",
   question: "What is 31 + 4?",
   choices: ["35", "7", "24"],
   answer: "35"
},
{
   category: "Math",
   question: "What is 3 + 54?",
   choices: ["1", "57", "24"],
   answer: "57"
}
];

function getRandomQuestion(question) {
 const randomIndex = Math.floor(Math.random() * question.length);
 return question[randomIndex];
}


function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}

function getResults(question,computerChoice) {
  if (computerChoice === question.answer) {
  return "The computer's choice is correct!";
  } else {
    return`The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
