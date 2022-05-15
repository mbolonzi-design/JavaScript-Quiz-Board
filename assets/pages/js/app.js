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
// getting questions and answers from the array
function showQuetions(index){
    const question_text = document.querySelector(".question_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    question_text.innerHTML = question_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}