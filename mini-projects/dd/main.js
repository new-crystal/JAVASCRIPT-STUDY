const background = document.querySelector('.background')
const backgroundRect = background.getBoundingClientRect();

function initCatching() {
    console.log(backgroundRect);
    addItem('vegetable', 10, 'img/blueberry.png');
    addItem('bug', 10, 'img/bug.png');
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
initCatching();