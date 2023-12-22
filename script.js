function dom(callBy) {
  return document.querySelector(callBy);
}

let score = dom('.score');
let highscore = dom('.highscore');
let input = dom('.guess');
let message = dom('.message');
let checkBtn = dom('.check');
let againBtn = dom('.again');
let number = dom('.number');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
highscore.textContent = '0';

function compare(userInput, computerInput) {
  if (userInput - computerInput == 1 || userInput - computerInput == -1) {
    message.textContent = ' TOO ClOSE TRY HARDER';
    score.textContent -= 1;
  } else if (!userInput) {
    message.textContent = 'NO NUMBER ! ';
    score.textContent -= 1;
  } else if (userInput > 20 || userInput < 1) {
    message.textContent = 'Please Guess between 1 to 20';
    score.textContent -= 1;
  } else if (userInput > computerInput) {
    message.textContent = ' TOO HIGH';
    score.textContent -= 1;
  } else if (computerInput > userInput) {
    message.textContent = 'TOO LOW';
    score.textContent -= 1;
  } else if (userInput == computerInput) {
    message.textContent = 'CONGRATULATIONS YOU WON';
    number.textContent = `${computerInput}`;
    if (Number(score.textContent) >= Number(highscore.textContent)) {
      highscore.textContent = score.textContent;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  }

  if (Number(score.textContent) < 1) {
    message.textContent = 'YOU LOSE';
    score.textContent = '0';
  }
}

checkBtn.addEventListener('click', function () {
  compare(Number(input.value), randomNumber);
});

againBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  score.textContent = '20';
  number.textContent = '?';
  input.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
