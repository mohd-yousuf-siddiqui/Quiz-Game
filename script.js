// DOM Elements

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');

// Quiz Questions

const quizQuestions = [
    {
        question: 'What is the capital of France?',
        answers: [
            {text: 'Berlin', correct:false},
            {text: 'London', correct:false},
            {text: 'Paris', correct:true},
            {text:'Madrid', correct:false},
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers:[
            {text:'Earth', correct:false},
            {text:'Mars', correct:true},
            {text:'Jupiter', correct:false},
            {text:'Saturn', correct:false},
        ],
    },
    {
        question: "What is the largest ocean on Earth",
        answers: [
            {text:'Atlantic Ocean', correct:false},
            {text:'Indian Ocean', correct:false},
            {text:'Arctic Ocean', correct:false},
            {text:'Pacific Ocean', correct:true},
        ],
    },
    {
        question: 'Which of these is not a programming language?',
        answers: [
            {text:'Python', correct:false},
            {text:'JavaScript', correct:false},
            {text:'HTML', correct:true},
            {text:'Java', correct:false},
        ],
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            {text:'Au', correct:true},
            {text:'Ag', correct:false},
            {text:'Gd', correct:false},
            {text:'Go', correct:false},
        ]
    }
];


// Quiz State Variables

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;


//Event Listeners

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);



function startQuiz(){
    // reset vars
    currentQuestionIndex=0;
    score=0;
    scoreSpan.textContent=0;

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    showQuestion();
}

function showQuestion(){
    // reset state
    answersdisabled=false;

    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = ((currentQuestionIndex)/quizQuestions.length)*100;
    progressBar.style.width = progressPercent + '%';
    
    questionText.textContent = currentQuestion.question;

    // todo: explain this in a second
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');

        // what is dataset? 
        // dataset is a way to store custom data via button elements
        // here we are storing if the answer is correct or not
        button.dataset.correct = answer.correct;

        button.addEventListener('click', selectAnswer);

        answersContainer.appendChild(button);
    })
}

function selectAnswer(event){

}

function restartQuiz(){
    console.log("Quiz Re-started");
}