let questions = [
    {
        question: "A complete graph can have",
        options: ["n-2 spanning trees", "nn-2 spanning trees", "spanning trees", "n spanning trees"],
        right_ans: "nn-2 spanning trees",
    },
    {
        question: "What is full form of CSS",
        options: ["Javascript", "Cascading", "style", "None of these"],
        right_ans: "None of these",

    },
    {
        question: "Html is programming language",
        options: ["Yes", "No"],
        right_ans: "No",

    },
    {
        question: "What is full form of HTML",
        options: ["hyper text markup language", "High markup language", "hyper text mockup language", "None of these"],
        right_ans: "hyper text markup language",

    },
    {
        question: "There are no array in js",
        options: ["yes", "no", "maybe", "None of these"],
        right_ans: "no",

    },
    {
        question: "How do you define objects in js",
        options: ["{}", "()", "[]", "None of these"],
        right_ans: "{}",

    },
    {
        question: "How to include js in HTML document",
        options: ["style", "link", "script", "text"],
        right_ans: "script",

    },
    {
        question: "What is  the output of '2' + 2",
        options: ["4", "2", "22"],
        right_ans: "22",

    },
    {
        question: "which of these is not js framework",
        options: ["bootstrap", "angular", "Django", "react"],
        right_ans: "Django",

    },

];

let question_container = document.getElementById("question_container");
let title = document.getElementById("title");
let options = document.getElementById("options");
let result = document.getElementById("result");
let submit = document.getElementById("submit");
let next = document.getElementById("next");
let answersheet = document.getElementById("answersheet");
let header = document.getElementById("header");

var score = 0;
var current_ques = 0;

function createQuestion() {
    var question = questions[current_ques];
    header.innerText = "Quiz";
    next.style.display = "none";
    title.innerText = question.question;

    question.options.forEach((option, index) => {
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "option");
        radio.setAttribute("value", option);

        var label = document.createElement("label");
        label.innerText = option;

        var list_item = document.createElement("li");

        list_item.appendChild(radio);
        list_item.appendChild(label);

        options.appendChild(list_item);
    });
}

createQuestion();

submit.addEventListener("click", (e) => {
    var options = document.getElementsByName("option");

    var checked_ans = "";
    options.forEach((option, i) => {
        if (option.checked) checked_ans = i;
    })
    if (checked_ans === "")
        result.innerText = "Error";
    else {
        var selected_option = options[checked_ans].value;
        var is_right = questions[current_ques].right_ans === selected_option;

        if (is_right) {
            submit.style.display = "none";
            result.innerText = "Correct";
            result.classList.add("correct");
            next.style.display = "block";
            score++;
        }
        else {
            submit.style.display = "none";
            result.innerText = "In Correct";
            result.classList.add("incorrect");
            next.style.display = "block";
        }
    }
})

next.addEventListener("click", () => {
    result.setAttribute("class", "");
    result.innerText = " ";
    options.innerHTML = "";

    next.style.display = "none";
    submit.style.display = "block";
    // questions.shift();
    current_ques++;
    if (questions[current_ques])
        createQuestion();
    else {
        answersheet.style.display = "block";
        question_container.style.display = "none";
        showAnswerSheet();
    }
})

function showAnswerSheet() {
    header.innerText = "Score: " + score;
    var label = document.createElement("h1");
    label.innerText = "Answer key";
    // label.style.setProperty("font-size", "x-large");
    answersheet.appendChild(label);

    var list = document.createElement("ul");
    list.setAttribute("class", "x");
    list.style.setProperty("padding-left", "35px");

    questions.forEach((question) => {
        var list_item = document.createElement("li");
        list_item.innerHTML = question.question + " - " + '<span style="background-color:#28a745;color:white; padding: 0.1rem;border-radius:3px;" >' + question.right_ans + '</span >';
        list_item.style.setProperty("padding", "0.2rem");
        list.appendChild(list_item);
    })
    var button = document.createElement("button");
    button.style.setProperty("background-color", "#17a2b8");
    button.innerText = "Restart";

    button.addEventListener("click", () => {
        answersheet.innerHTML = '';
        score = 0;
        current_ques = 0;
        answersheet.style.display = "none";
        question_container.style.display = "block";
        createQuestion();
    })

    answersheet.appendChild(list);
    answersheet.appendChild(button);
}



