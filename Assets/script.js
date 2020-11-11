var myQuestions = [
    {
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
var startBtn = document.getElementById('startbtn');
var quizContainer = document.getElementById('quiz');
var resultsContainer= document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, startBtn);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton, startBtn){

    function showQuestions(questions, quizContainer){
        // code will go in here

        var output=[];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // first reset the list of answers
            answers=[];

            // for each available answer to this question...
            for(letter in questions[i].answers){


                // add HTML radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name ="question '+i+'" value=" "+letter+"">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
            
            // combine output list into one string of HTML and put it to page
            quizContainer.innerHTML = output.join('');

        }
    }

function showResults(questions, quizContainer, resultsContainer){

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

// show the questions right away
showQuestions(questions, quizContainer);

// when user clicks submit, show results
submitButton.onclick= function(){
    showResults(questions, quizContainer, resultsContainer);
    
    }
// when user clicks "Begin", quiz starts
startBtn.onclick=function(){
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, startBtn);
}
}



