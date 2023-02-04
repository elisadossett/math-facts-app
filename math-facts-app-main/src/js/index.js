const url = "http://numbersapi.com/random/math";
let mathFactsArr = [];
let globalQuestion;
let modalTitle = document.getElementById('modalQuestion');
modalTitle.textContent = 'Your Question is...'
let questionDiv = document.querySelector('.questionForm');
let answerDiv = document.querySelector('.numFacts');
answerDiv.style.display = 'none';
let answerEl = document.getElementById('answer');

const genQuestion = () => {
    let questions = [{q: '2+2', a: 4}, {q: '3*3', a: 9}, {q: '9*7', a: 63}];
    globalQuestion = questions[Math.floor(Math.random() * questions.length)];
    const questionInput = document.querySelector("#questionInput");
    questionInput.value = `What is the answer to ${globalQuestion.q}`;
}

const verAnswer = async () => {
    try {
        if (globalQuestion.a !== +answerEl.value) {
            alert('Wrong answer');
            return
        }
        questionDiv.style.display = 'none';
        fetchMathFacts();
    } catch (err) {
        console.log(err);
    }
}

const fetchMathFacts = async () => {
    try {
        let response = await fetch(url);
        if (response.status !== 200) return alert('could not fetch');
        let fact = await response.text();
        let factP = document.querySelector('.fact');
        factP.textContent = fact;
        modalTitle.textContent = 'Correct!'
        answerDiv.style.display = 'block';
    } catch (err) {
        alert(err)
    }
}

const reset = () => {
    modalTitle.textContent = 'Your Question is...'
    answerEl.value = '';
    answerDiv.style.display = 'none';
    questionDiv.style.display = 'block';
    genQuestion();
}

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//TODO: add handle point for increase and decrease scores on leaderboard
//TODO: signup/login if you want to be on the leaderboard

// To use local storage for users and leaderboard points TODO FOR LOCAL STORAGE
// const setLeaderboard = (user) => {
//     let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
//     leaderboard.push(user);
//     localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
// }

// const getLeaderboard = () => {
//     return JSON.parse(localStorage.getItem('leaderboard')) || [];
// }


