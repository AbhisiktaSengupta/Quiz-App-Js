const questions = [
    {
        question: " How is the 2nd element in an array accessed based on pointer notation ?",
        a: "*a + 2",
        b: "*(a + 2)",
        c: "*(*a + 2)",
        d: "&(a + 2)",
        correct: "b"
    },
    {
        question: " Which algorithm has the best complexity in the worst case ?",
        a: "Merge Sort",
        b: "Quick Sort",
        c: "Bubble Sort",
        d: "Selection Sort",
        correct: "a"
    },
    {
        question: "What is the maximum number of swaps that can be performed in the Selection Sort algorithm ?",
        a: "n - 1",
        b: " n ",
        c: "n - 2",
        d: "1",
        correct : "a"
    },
    {
        question: "Which of the mentioned is the formula of Oleum ?" ,
        a : "H2S2O8",
        b : "H2S2O6",
        c : "H2S2O7",
        d : "H2S2O5",
        correct: "c"
    },
    {
        question: " Which of the mentioned can be used as raw material to manufacture sulphuric acid?" ,
        a : "Iron pyrites",
        b : "Elemental Sulphur",
        c : "Hydrogen Sulphide",
        d : "All of the mentioned",
        correct: "d"
    }
]
//console.log(questions[0])
const question=document.querySelector('.question')
const option_a=document.querySelector('#a_txt');
const option_b=document.querySelector('#b_txt');
const option_c=document.querySelector('#c_txt');
const option_d=document.querySelector('#d_txt');
const submitbtn = document.querySelector('.btn');
const quiz = document.querySelector(".quiz-container")
const myOptions = document.querySelectorAll('input')
console.log(myOptions)
let currentQuiz=0;

//Setting the questions
function takeQuiz()
{
    const currentQuizData = questions[currentQuiz]
    question.innerText = currentQuizData.question;
    option_a.innerText = currentQuizData.a;
    option_b.innerText = currentQuizData.b;
    option_c.innerText = currentQuizData.c;
    option_d.innerText = currentQuizData.d;
}

takeQuiz();
//Returning the id of the ans that was selected.
function getAnswer()
{
    let answer;
    myOptions.forEach((option)=>{
        console.log(option)
        if(option.checked===true)
        {
            answer=option.id
        }
    })
    console.log(answer)
    return answer;
}
//for unselecting
function getSelection(id){
    const opt=document.querySelector(`#${id}`)
    opt.checked=false;
}

let score=0
submitbtn.addEventListener("click",()=>{
//console.log("click")
    const ans=getAnswer();
    if(ans)
    {
        if(ans===questions[currentQuiz].correct)
        {
            score++
        }
        currentQuiz++;
        getSelection(ans);
        if(currentQuiz<questions.length)
        {
            takeQuiz();
        }
        else{
            quiz.innerHTML = `<h2 class="result">You have done ${score}/${questions.length} correctly`
            submitbtn.innerHTML = `Start Quiz Again`
            submitbtn.addEventListener("click",()=>{
                location.reload();
            })
        }
       
    }
})

