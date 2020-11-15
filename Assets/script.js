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
// var showQuestions = 0;
var intro = document.getElementById("intro");
var instructions = document.querySelector(".rules");
// var timer = document.getElementById("timer");



console.log(instructions);


// beginQuiz function
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


    // creates "Next Question" button when function beginQuiz is executed
    var nextQ = document.createElement("button");
    var node2 = document.createTextNode("Submit");
    nextQ.id = "submitBtn";
    nextQ.appendChild(node2);
    var nQ = document.getElementById("bottombtns");
    nQ.appendChild(nextQ);


    // call resetTimer function (resets timer if you guess the correct answer)


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
function checkAnswer(event) {

    console.log(questions[currentQuestion].correctAnswer === event.target.id);
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

// [{
//     initials: "JRJ",
//     score: 5
// }]
function showHighScores() {
        console.log(timeLeft)
        
        // 1. Create/Show Element for user input

        var highScore = document.createElement("input");
        // 2. gather information from input
        // 3. Make a variable that we can use in localStorage 
    
        // THIS IS FOR AN EXAMPLE AND DOES NOT NECESSARILY WORK
        var highScore = {
            username: document.querySelector("input"),
            score: timeLeft
        }
    
        // 4. localStorage.setItem(highScore.username, highScore.timeLeft)
        // https://tinyurl.com/y59lbefd
    }

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


// When you click the start button, it will run showQuestions function.
startBtn.addEventListener("click", beginQuiz);
submitBtn.addEventListener("click", showHighScores);

    // create resetTimer function, which resets the timer back to 5 seconds if you get the correct answer.
//    function resetTimer(){
//     if (userAnswer=== )

//    }

// function showResults(){

//     // code will go in here
//     // gather answer containers from our quiz
//     var answerContainers= quizContainer.querySelectorAll('.answers');

//     // keep track of answers
//     var userAnswer='';
//     var numCorrect=0;

//     // for each question...
//     for(var i=0; i<questions.length; i++){

//         // find selected answer
//         userAnswer=(answerContainers[i].querySelector('input[name=question'+i+']:checked')|| {}).value;

//         // if answer is correct
//         if(userAnswer===questions[i].correctAnswer){
//             // add to the number of correct answers
//             numCorrect++;

//             // color the answers green
//             answerContainers[i].style.color= 'lightgreen';
//         }
//         // if answer is wrong or blank
//         else{
//             // color answers red
//             answerContainers[i].style.color= 'red';
//         }
//     }
//     // show number of correct answers out of total
//     resultsContainer.innerHTML=numCorrect + 'out of' + questions.length;
// }

// // when user clicks submit, show results
// submitButton.onclick= function(){
//     showResults(questions, quizContainer, resultsContainer);

    // }




