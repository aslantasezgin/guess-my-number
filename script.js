"use strict";

/** 
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // input boşsa
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    /** cevap doğruysa */
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(".highscore").textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 0) {
      /**  document.querySelector(".message").textContent =
        guess > secretNumber ? "To High" : "Too Low!"; */
      displayMessage(guess > secretNumber ? "To High" : "Too Low!");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }

  /* cevap büyüske
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = " To High";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You Lost The Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  // cevap küçükse
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = " To Low";
      document.querySelector(".score").textContent = score;

      score = score - 1;
    }

    // score 0'dan küçükse
    else {
      document.querySelector(".message").textContent = " You Lost The Game!";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
