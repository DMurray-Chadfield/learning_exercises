const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Invalid input.')
    };
  };
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    };
  };
  const determineWinner = (userChoice, computerChoice) => {
    let userWin = 'You won the game!';
    let computerWin = 'The computer won the game.';
    console.log(`You chose ${userChoice} and the computer chose ${computerChoice}.`);
    if (userChoice === 'bomb') {
      return 'You automatically win the game!';
    } else if (userChoice === computerChoice) {
      return 'The game was a tie.';
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return computerWin;
      } else {
        return userWin;
      };
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return computerWin;
      } else {
        return userWin;
      };
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return computerWin;
      } else {
        return userWin;
      };
    };
  };
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();