var questions = [
    {  
        // 0
        question: "What does HTML stand for?",
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
        question: "What does CSS stand for?",
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
        question: "Choose the correct HTML tag for the largest heading.",
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
        question: "What is the correct HTML tag for inserting a line break?",
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
        question: "What are the three building blocks of web development?",
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
var resultsContainer= document.getElementById("results");
var currentQuestion = 0;
// var showQuestions = 0;
var intro = document.getElementById("intro");
var instructions = document.querySelector(".rules");
// var timer = document.getElementById("timer");



console.log(instructions);


    // showQuestions function
    function showQuestions(){
        console.log("hi");
        // removes HTML elements
        instructions.textContent = "";
        intro.textContent = "";
        startBtn.remove();


        // adds timer when function showQuestions is executed
        var para = document.createElement("p");
        var node = document.createTextNode(15);
        node.id= "timeLeft";
        para.appendChild(node);
        var element= document.getElementById("challenge");
        element.appendChild(para);


        var output=[];
        var answers;

        // creates H2 element to store questions and creates buttons to store answer choices..
        var question = document.createElement("h2");
        question.textContent = questions[currentQuestion].question
        quizContainer.appendChild(question);
        for (key in questions[currentQuestion].answers) {
            console.log (questions[currentQuestion].answers[key]);
            var answer = document.createElement("button");
            answer.textContent = questions[currentQuestion].answers[key];
            quizContainer.appendChild(answer);
        }
    }

function startTimer(){
  // GET THIS WORKING *
        // starts timer when showQuestions function is executed
        
            const timeLeftDisplay = document.getElementById("timeLeft")
           
            var timeLeft=15;
                setInterval(function(){
                     if(timeLeft <=0 ){
                         clearInterval(timeLeft = 0)
                     }
                    timeLeftDisplay.innerHTML = timeLeft
                    timeLeft -=1
                }, 1000);
};

console.log(startBtn);
    startBtn.addEventListener("click", showQuestions);
   
    
function showResults(){

    // code will go in here
    // gather answer containers from our quiz
    var answerContainers= quizContainer.querySelectorAll('.answers');

    // keep track of answers
    var userAnswer='';
    var numCorrect=0;

    // for each question...
    for(var i=0; i<questions.length; i++){

        // find selected answer
        userAnswer=(answerContainers[i].querySelector('input[name=question'+i+']:checked')|| {}).value;

        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[i].style.color= 'lightgreen';
        }
        // if answer is wrong or blank
        else{
            // color answers red
            answerContainers[i].style.color= 'red';
        }
    }
    // show number of correct answers out of total
    resultsContainer.innerHTML=numCorrect + 'out of' + questions.length;
}

// when user clicks submit, show results
submitButton.onclick= function(){
    showResults(questions, quizContainer, resultsContainer);
    
    }
// when user clicks "Begin", quiz starts
// startBtn.onclick=function(){
//     generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, startBtn);
// }



