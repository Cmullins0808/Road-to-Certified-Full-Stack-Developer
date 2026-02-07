const questions = [
  
  { category: "Math",
    question: "What is 1 + 1?", 
    choices: ["3", "2", "6"],
    answer: "2"
  },
  { category: "Math",
    question: "What is 5 + 1?", 
    choices: ["3", "2", "6"],
    answer: "6"
  },
  { category: "English",
    question: "Which word is a noun?", 
    choices: ["run", "car", "jump"],
    answer: "car"
  },
  { category: "Science",
    question: "What is the third panet from the Sun?", 
    choices: ["Earth", "Venus", "Jupiter"],
    answer: "Earth"
  },
  { category: "History",
    question: "What year did Christopher Columbus Arrive in the Americas?", 
    choices: ["1493", "1492", "1496"],
    answer: "1492"
  }
];

function getRandomQuestion(question) {
   const randomIndex = Math.floor(Math.random() * questions.length);
   return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer){
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
