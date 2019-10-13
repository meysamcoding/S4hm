const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choicesA = document.getElementById("A");
const choicesB = document.getElementById("B");
const choicesC = document.getElementById("C");
const choicesD = document.getElementById("D");
const timer = document.getElementById("timer");
const progress = document.getElementById("progress");
const renderanswer = document.getElementById("check");
const mainscore = document.getElementById("mainscore");
  const startagain = document.getElementById("startagain");
const save = document.getElementById("save");
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["alerts", "booleans", "strings", "numbers"],
        Correct: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes","parentheses", "curly brackets",  "square brackets"],
        Correct: "parentheses"
    },
    {
        title: "Arrays in javaScript can be used to store_____?",
        choices: ["number ", "letter" , "all of them", " boolean"],
        Correct: "all of them"
    },
    {
        title: "String values must be enclosed within_____ when being assigned to variables.",
        choices: ["commas", "quotes", "parentheses" , "curly brackets"],
        Correct: "curly brackets"
    },
     
];
const lastquestion = questions.length - 1;
let runningquestion = 0;
let count = 75;
let score = 0;
var myVar;
function renderQuestion() {
    let q = questions[runningquestion];
    question.innerHTML = "<p>" + q.title + "</p>";
    choicesA.innerHTML = q.choices[0];
    choicesB.innerHTML = q.choices[1];
    choicesC.innerHTML = q.choices[2];
    choicesD.innerHTML = q.choices[3];
}
start.addEventListener("click", startquiz);
function startquiz() {
    
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    rendertimer();
}

function rendertimer() {
    myVar = setInterval(function () {
        --count;
        timer.innerHTML = "Timer:" + count;
        if (count === 0) {
            clearInterval(myVar);
            quiz.style.display = "none";
            renderscore();
        }
    }, 1000);
}
 
function checkAnswer(answer) {
    console.log(answer);
    if (answer == questions[runningquestion].Correct) {
        score++;
        console.log(questions[runningquestion].Correct)
        renderanswer.innerHTML = "Correct";
    } else {
        count -= 15;
        renderanswer.innerHTML = "Wrong";
        
    }
    if (runningquestion < lastquestion) {
        runningquestion++;
        renderQuestion();
    } else {

        clearInterval(myVar);
        renderscore();
    }
}
function renderscore() {
    quiz.style.display = "none";
    progress.style.display = "block";
    var scorepercent =  100 * score / questions.length ;
    mainscore.value = scorepercent;
    save.value = scorepercent;
}
function myFunction() {
    var x = document.getElementById("mainscore").value;
    addscore.textContent = x;
}


 
 
startagain.addEventListener("click", function(){
    location.reload();
 });
  