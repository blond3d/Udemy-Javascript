'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '19';
document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No number!');
  } //when player win
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Guess too low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Guess too low!');
    } else {
      displayMessage('You lost the game!');
      // document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when player is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too High!';
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } //when player is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too Low!';
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
