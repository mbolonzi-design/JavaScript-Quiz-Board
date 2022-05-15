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