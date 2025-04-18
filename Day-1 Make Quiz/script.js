// const Question = [
//     {
//         Question: "which is largest animal in the words:",
//         answers:[
//             { text: "shark",correct:false},
//             { text: "sharks",correct:true},
//             { text: "sharkw",correct:false},
//             { text: "shark",correct:false},

//         ]
//     },
//     {
//         Question: "which is largest animal in the words:",
//         answers:[
//             { text: "shark",correct:false},
//             { text: "sharks",correct:true},
//             { text: "sharkw",correct:false},
//             { text: "shark",correct:false},

//         ]
//     },
//     {
//         Question: "which is largest animal in the words:",
//         answers:[
//             { text: "shark",correct:false},
//             { text: "sharks",correct:true},
//             { text: "sharkw",correct:false},
//             { text: "shark",correct:false},

//         ]
//     },
//     {
//         Question: "which is largest animal in the words:",
//         answers:[
//             { text: "shark",correct:false},
//             { text: "sharks",correct:true},
//             { text: "sharkw",correct:false},
//             { text: "shark",correct:false},

//         ]
//     }
// ];

// const QuestionElement = document.getElementById("Question");
// const Answerbuttons = document.getElementById("Answer_button");
// const nextbtn =document.getElementById("next_btn");
// const prevbtn = document.getElementById("next_btn");

// let correctQuestionindex=0;
// let score =0;

// function startQuiz()
// {
//     correctQuestionindex = 0;
//     score = 0;
//     nextbtn.innerHTML = "next_btn";
//     prevbtn.innerHTML = "Prev_btn";
//     showQuestion();
// }
// function showQuestion()
// {
//     let correctQuestion = Question[correctQuestionindex];
//     let QuestionNo = correctQuestionindex + 1;
//     QuestionElement.innerHTML = Question + " ," + correctQuestion.
//     Question;
//     correctQuestion.answers.forEach(answers=>{
//         const button = document.createElement("button");
//     button.innerHTML = answers.text;
//     button.classList.add("btn");
//     Answerbuttons.appendChild(button)
//     });
// }

// startQuiz();
const quizData = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: ["Leo Tolstoy", "Charles Dickens", "William Shakespeare", "Mark Twain"],
      correct: 2
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: ["Indian", "Atlantic", "Arctic", "Pacific"],
      correct: 3
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const answerBtns = document.querySelectorAll('.answer-btn');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  
  function loadQuiz() {
    const current = quizData[currentQuiz];
    questionEl.textContent = current.question;
  
    answerBtns.forEach((btn, index) => {
      btn.textContent = current.answers[index];
      btn.style.background = '#e0e0e0';
      btn.disabled = false;
    });
  }
  
  answerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = parseInt(btn.dataset.index);
      const correct = quizData[currentQuiz].correct;
  
      if (selected === correct) {
        score++;
        btn.style.background = '#8bc34a'; 
      } else {
        btn.style.background = '#f44336';
        answerBtns[correct].style.background = '#8bc34a';
      }
  
      answerBtns.forEach(b => b.disabled = true);
    });
  });
  
  nextBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showScore();
    }
    
  });
  
  
  function showScore() {
    document.getElementById('quiz').innerHTML = `
      <h2>You scored ${score} out of ${quizData.length}!</h2>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
  
  loadQuiz();
  