const timer = document.querySelector("#timer");
const scores = document.querySelector("#score");
const game = document.querySelector("#game");
const start = document.querySelector("#start");
const cells = document.querySelectorAll(".cell");

const holes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let started = false;
let score = 0;
let time = 20;

start.addEventListener("click", () => {
  if (started) return;
  started = true;
  const timerId = setInterval(() => {
    time = (time * 10 - 1) / 10;
    timer.textContent = time;
    if (time === 0 || time < 0) {
      clearInterval(timerId);
      clearInterval(tickId);
      setTimeout(() => {
        if (score >= 200) {
          started = false;
          time = 20;
          alert(`훌륭하시군요! 점수는${score}점!`);
          score = 0;
        } else {
          started = false;
          time = 20;
          alert(`아쉽군요! 점수는${score}점! 다시 도전해 보세요!`);
          score = 0;
        }
      }, 50);
    }
  }, 100);
  const tickId = setInterval(tick, 1000);
  tick();
});

let gopherPercent = 0.5;
let bombPercent = 0.7;

function tick() {
  holes.forEach((hole, index) => {
    if (hole) return;
    const randomValue = Math.random();
    if (Math.random() < gopherPercent) {
      const gopher = cells[index].querySelector(".gopher");
      holes[index] = setTimeout(() => {
        gopher.classList.add("hidden");
        holes[index] = 0;
      }, 1000);
      gopher.classList.remove("hidden");
    } else if (Math.random() < bombPercent) {
      const bomb = cells[index].querySelector(".bomb");
      holes[index] = setTimeout(() => {
        bomb.classList.add("hidden");
        holes[index] = 0;
      }, 1000);
      bomb.classList.remove("hidden");
    }
  });
}

cells.forEach((cell, index) => {
  cell.querySelector(".gopher").addEventListener("click", (event) => {
    score += 10;
    scores.textContent = score;
    event.target.classList.add("dead");
    event.target.classList.add("hidden");
    clearTimeout(holes[index]);
    setTimeout(() => {
      holes[index] = 0;
      event.target.classList.remove("dead");
    }, 1000);
  });
  cell.querySelector(".bomb").addEventListener("click", (event) => {
    score -= 20;
    scores.textContent = score;
    event.target.classList.add("boom");
    event.target.classList.add("hidden");
    clearTimeout(holes[index]);
    setTimeout(() => {
      holes[index] = 0;
      event.target.classList.remove("boom");
    }, 1000);
  });
});
