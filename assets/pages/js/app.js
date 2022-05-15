//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const container = document.querySelector(".container");
const quit_btn = container.querySelector(".buttons .quit");
const next_btn = container.querySelector(".buttons .next_btn");
const quiz_box = document.querySelector(".quiz_box");
const results_box = document.querySelector(".results_box");
const option_list = document.querySelector("option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
//start button
start_btn.onclick = () => {
    container.classList.add("activeInfo");
}

//exit button
quit_btn.onclick = () => {
    container.classList.remove("activeInfo");
}

next_btn.onclick = ()=>{
    container.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    questionCounter(1);
    startTimer(60);
    startTimeLine(0);
}

let timeValue = 60;
let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = results_box.querySelector(".buttons .restart");
const quit_quiz = results_box.querySelector(".buttons .quit");

//next quiz button

restart_quiz.onclick = () =>{
    quiz_box.classList.add("activeQuiz");
    results_box.classList.remove("activeResults");

    timeValue = 60;
    questionCount = 0;
    questionNumber = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(questionCount);
    questionCounter(questionNumber);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimeLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();//relaod current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_question_counter = document.querySelector("footer .total_question");

//next quiz button action when clicked

next_btn.onclick = ()=>{
    if(questionCount < questions.length - 1){
        questionCount++;
        questionNumber++;
        showQuestions(questionCount);
        questionCounter(questionNumber);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimeLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResults();//calling showResult function
    }
}