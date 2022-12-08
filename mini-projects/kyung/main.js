const chooseRock = document.querySelector('#chooseRock');
const chooseScissors = document.querySelector('#chooseScissors');
const choosePaper = document.querySelector('#choosePaper');
const computerOptions = ['rock', 'paper', 'scissors'];
const defaultValue = document.querySelector('#defaultValue')

//const timer = document.querySelector('#timer');

// Choice
let computerChoice = 0; //컴퓨터 결과
let userChoice = 0;
let start = false;

// Score
let computerScore = () => {
    
}
let userScore = () => {

}
 
// start.addEventListener("click", () => {
//     if (start) return;
//     start = true;
    
// })

const updateScore = () => {
    const computerScore = document.querySelector('');
    const userScore = document.querySelector('');
}

const compare = (computerChoice, userChoice) => {
    const winner = document.querySelector('.winner');
    //무승부일 경우
    if (computerChoice == userChoice) {
        winner.textContent = "무승부입니다!"
        return;
    }
    //사용자가 주먹을 낼 경우
    if (userChoice == 'rock') {
        if (computerChoice == 'scissors') {
            winner.textContent = "이겼습니다!"
            userScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "졌습니다!"
            computerScore++;
            updateScore();
            return;
        }
    }
    //사용자가 가위를 낼 경우 
    if (userChoice == 'scissors') {
        if (computerChoice == 'paper') {
            winner.textContent = "이겼습니다!"
            userScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "졌습니다!"
            computerScore++;
            updateScore();
            return;
        }
    }
}


