// questions array.. 5 questions total.
var questions = [
    {
        // 0
        question: "Question 1/5: What does HTML stand for?",
        answers: {
            a: "Happier Than My Lads",
            b: "Hyper Text Markup Language",
            c: "Hyper Text Macro Language",
            d: "Hyper Text Made-Up Language"
        },
        correctAnswer: "b"
    },

    {
        // 1
        question: "Question 2/5: What does CSS stand for?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Crazy Style Sheets",
            c: "Cascading Swagger Sheets",
            d: "Casual Style Sheets"
        },
        correctAnswer: "a"
    },

    {
        // 2
        question: "Question 3/5: Choose the correct HTML tag for the largest heading.",
        answers: {
            a: "<title>",
            b: "<head>",
            c: "<h1>",
            d: "<header>"
        },
        correctAnswer: "c"
    },

    {
        // 3
        question: "Question 4/5: What is the correct HTML tag for inserting a line break?",
        answers: {
            a: "<skip>",
            b: "<break>",
            c: "<lb>",
            d: "<br>"
        },
        correctAnswer: "d"
    },

    {
        // 4
        question: "Question 5/5: What are the three building blocks of web development? Click submit when finished",
        answers: {
            a: "HTML, CSS, Javascript",
            b: "HTML, CSS, Python",
            c: "CSS, Python, Javascript",
            d: "HTML, Python, Javascript"
        },
        correctAnswer: "a"
    },

]

// define all variables
var startBtn = document.getElementById("startbtn");
var quizContainer = document.getElementById("quiz");
var submitButton = document.getElementById("score");
var resultsContainer = document.getElementById("results");
var currentQuestion = 0;
var timeLeft = 30;
var intro = document.getElementById("intro");
var instructions = document.querySelector(".rules");
var username= document.getElementById("username");
var saveScoreBtn=document.getElementById("saveHiScoreBtn");


function beginQuiz() {

    // removes HTML elements
    instructions.textContent = "";
    intro.textContent = "";
    startbtn.remove();
    highscorebtn.remove();


    // adds timer when function beginQuiz is executed
    var para = document.createElement("p");
    var node = document.createTextNode(30);
    para.id = "timeLeft";
    para.appendChild(node);
    var element = document.getElementById("challenge");
    element.appendChild(para);
    startTimer();

    var output = [];
    var answers;
    displayQuestion();
}


function displayQuestion() {
    // creates H2 element to store questions and creates buttons to store answer choices..
    quizContainer.innerHTML = "";
    var question = document.createElement("h2");
    question.textContent = questions[currentQuestion].question
    quizContainer.appendChild(question);

    // object loop
    for (key in questions[currentQuestion].answers) {
        console.log(questions[currentQuestion].answers[key]);
        var answer = document.createElement("button");
        answer.id = key;
        answer.textContent = questions[currentQuestion].answers[key];
        answer.addEventListener("click", checkAnswer);
        quizContainer.appendChild(answer);
    }
}

// clean up checkAnswer function
function checkAnswer(event) {
    if (questions[currentQuestion].correctAnswer === event.target.id) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion()
        }
        else {
            showHighScores();
        }
    } else { 
        timeLeft = timeLeft - 10 
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion()
        }
        else {
            showHighScores();
        }
    }
}


function showHighScores() {

    // 1. figure out how to clear out the elements on the page when user clicks "submit" button.  

         // creates "Get Results" button when function showHighScores() is executed
        var submitNow = document.createElement("button");
        var node2 = document.createTextNode("Get Results");
        submitNow.id = "getResults";
        submitNow.addEventListener("click", function(){
            window.location.href = "pages/hiscore.html"
        });
        submitNow.appendChild(node2);
        var endBtn = document.getElementById("bottombtns");
        endBtn.appendChild(submitNow);

    // clears screen 
        quizContainer.textContent="";
     
        
        // Create username and high score variables 
        
        // put score in #finalscore with append child
        var node = document.createElement("h1");
        var textNode = document.getElementById("timeLeft");
        node.appendChild(textNode);
        document.getElementById("#finalScore").appendChild(textNode);
    
    };

function startTimer() {
    // starts timer when showQuestions function is executed

    const timeLeftDisplay = document.getElementById("timeLeft")

    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000);
};

console.log(startBtn);

startBtn.addEventListener("click", beginQuiz);







