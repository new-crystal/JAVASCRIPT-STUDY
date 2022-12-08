/**
 * feild set
 */
const background = document.querySelector('.background')
const backgroundRect = background.getBoundingClientRect();
/**
 * game set
 */
const vegetable_count = 10;
const but_count = 10;
/**
 * botton set
 */
const gBtn = document.querySelector('.startBtn');
const timerBox = document.querySelector('.timerBox');
const gTimer = document.querySelector('.timer');
const gCounter = document.querySelector('.conut');

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
}
function stopGame() {

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

function initCatching() {
    // console.log(backgroundRect);
    addItem('vegetable', vegetable_count, 'img/blueberry.png');
    addItem('bug', but_count, 'img/bug.png');
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
    item.style.width = '90px';
    item.style.height = '90px';
    
    background.appendChild(item);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  

}
