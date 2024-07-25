const quiz = [
    {
        question: "who is ceo of accenture?",
        ans1text: "Satya Nadella",
        ans2text: "Arvind Krishna",
        ans3text: "Sundar Picha",
        ans4text: "Julie Sweet",
        answer: "Julie Sweet"
    },
    {
        question: "who is ceo of coca-cola?",
        ans1text: "James Quincey",
        ans2text: "John Murphy",
        ans3text: "Stacy Apter",
        ans4text: "Henrique Braun",
        answer: "James Quincey"
    },
    {
        question: "who invented openai?",
        ans1text: "Sam Altman",
        ans2text: "Elon Musk",
        ans3text: "Ilya Sutskever",
        ans4text: "Greg Brockman",
        answer: "Sam Altman"
    },
    {
        question: "who is invented computer?",
        ans1text: "Charles Babbage",
        ans2text: "Stacy Apter",
        ans3text: "Sam Altman",
        ans4text: "Julie Sweet",
        answer: "Charles Babbage"
    },
]

const question = document.getElementById("quiz-question")
console.log(question)
console.log(question.textContent)

const option_a = document.getElementById("text_option_a")
const option_b = document.getElementById("text_option_b")
const option_c = document.getElementById("text_option_c")
const option_d = document.getElementById("text_option_d")
console.log(option_a)
console.log(option_b)
console.log(option_c)
console.log(option_d)
console.log(option_a.textContent)
console.log(option_b.textContent)
console.log(option_c.textContent)
console.log(option_d.textContent)

const submit = document.getElementById("submit")

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question)
console.log(quiz[currentQuestion].ans1text)
console.log(quiz[currentQuestion].ans2text)
console.log(quiz[currentQuestion].ans3text)
console.log(quiz[currentQuestion].ans4text)

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns)
    // console.log(checkedAns.nextElementSibling.textContent)
    if (checkedAns === null) {
        alert("please select an answer")
    }
    else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;

        }
        else{
            alert("you score is "+ score +"out of"+ quiz.length)
            location.reload();
        }
    }
})