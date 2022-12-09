'use strict';


const background = document.querySelector('.background')
const backgroundRect = background.getBoundingClientRect();

const vegetable_count = 30;
const bug_count = 20;
const init_timer = 10;

const gBtn = document.querySelector('.startBtn');
const timerBox = document.querySelector('.timerBox');
const gTimer = document.querySelector('.timer');
const gCounter = document.querySelector('.count');
const showPopUp = document.querySelector('.popUpBox');
const popBtn = document.querySelector('.popBtn');
const popMsg = document.querySelector('.popMsg');
const target = document.querySelector('.target')
let started = false;
let count = 0;
let timer = undefined;


gBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    } else {
        startGame();
    }
    
})
background.addEventListener('click', onClick);
popBtn.addEventListener('click',()=>{
    window.location.reload()
    hidePopUp();
    startGame();

})
function startGame() {
    started = true;
    initCatching();
    showStopBtn();
    showTimerBox();
    startTimer();

}
function stopGame() {
    started = false;
        initCatching();

    stopTimer();
    showPopMsg('Replay??');
}


function showStopBtn() {
    const playImg = gBtn.querySelector('.fa-play');
    playImg.classList.add('fa-stop');
    playImg.classList.remove('fa-play');

}

function showTimerBox() {
    timerBox.style.visibility = 'visible'
}

function startTimer() {
    let timing = init_timer;
    updateTime(timing);
    timer = setInterval(()=> {
        if(timing <= 0){
            clearInterval(timer);
            // finishGame(false);
            stopGame()
            return;
        }
        updateTime(--timing)
    }, 1000)
}

function stopTimer() {
    clearInterval(timer);
    showPopUp.style.visibility = 'visible'

}

function updateTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gTimer.innerText = `${minutes} : ${seconds}`;
}

function showPopMsg(text){
    popMsg.innerText = text;   
}
function hideGBtn() {
    gBtn.style.visibility = 'hidden';
}

function hidePopUp() {
    showPopUp.style.visibility = 'hidden';
    startTimer();
    started = true;
}
/**
 * HTML Set
 */
function initCatching() {
    background.innerHTML = '';
    gCounter.innerText = bug_count;
    // console.log(backgroundRect);
    addItem('vegetable', vegetable_count, 'img/vegetable.png');
    addItem('bug', bug_count, 'img/bug.png');
    
}

function onClick(event) {
    if(!started){
        return;
    }
    const target = event.target;
    if(target.matches('.bug')){
        target.remove();
        count++;
        updateScoreBoard();
        if(count === bug_count){
            stopTimer();
            finishGame(true);

        }
    }else if (target.matches('.vegetable')){
        stopTimer();
        finishGame(false);
        count === bug_count
    }
}
function finishGame(win) {
    hideGBtn();
    showPopMsg(win ? "WIN 👍👍👍": "LOST⁉️");
    started = false;
}

function updateScoreBoard() {
    gCounter.innerText = bug_count - count;
}

function addItem(className, count, imgPath){
const x1 = 0;
const y1 = 0;
const x2 = backgroundRect.width - 500;
const y2 = backgroundRect.height - 500;
for(let i = 0; i < count; i++){
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    item.style.objectFit = "cover";
    item.style.width = '120px';
    item.style.height = '120px';
    



    
    background.appendChild(item);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
    
    }
}
