'use strict';

/**
 * feild set
 */
const background = document.querySelector('.background')
const backgroundRect = background.getBoundingClientRect();
/**
 * game set
 */
const vegetable_count = 10;
const bug_count = 10;
const init_timer = 5;
/**
 * botton set
 */
const gBtn = document.querySelector('.startBtn');
const timerBox = document.querySelector('.timerBox');
const gTimer = document.querySelector('.timer');
const gCounter = document.querySelector('.count');
const showPopUp = document.querySelector('.popUpBox');
const popBtn = document.querySelector('.popBtn');
const popMsg = document.querySelector('.popMsg');
let started = false;
let count = 0;
let timer = undefined;


gBtn.addEventListener('click', () => {
    // console.log('btnTest');
    if(started){
        stopGame();
    } else {
        startGame();
    }
    started = !started;
})

function startGame() {
    initCatching();
    showStopBtn();
    showTimerBox();
    startTimer();
   
}
function stopGame() {
    stopTimer();
    showPopMsg('RE?');
}
function showStopBtn() {
    // console.log('stopTest');
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
