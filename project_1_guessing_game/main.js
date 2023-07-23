"use strict";

const message = document.querySelector(".message");
let highScore = document.querySelector(".highscore").textContent;

const playButton = document.querySelector(".btn-check");
const reset = document.querySelector(".try-again");

// secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".text").textContent = secretNumber;

// score
let score = 20;
// let highScore = 0;
document.querySelector(".score").textContent = score;

playButton.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   where the input uis empty
  if (!guess) {
    message.textContent = "⚠ Enter a number";
    message.style.color = "red";

    // when the player wins the game
  } else if (guess === secretNumber) {
    message.textContent = "👍correct Number";
    document.querySelector(".text").textContent = secretNumber;
    document.querySelector(".game-wrapper").style.backgroundColor = "#60b347";
    document.querySelector(".text").style.width = "200px";
    document.querySelector(".highscore").textContent = score;

  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You have lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".game-wrapper").style.backgroundColor = "#F11A7B";
    }
    // When the guess is less than the secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You have lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// reset the game
reset.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".text").textContent = "?";
  message.textContent = "Start guessing...";
  document.querySelector(".game-wrapper").style.backgroundColor = "#1b1a1afc";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
