<?php
$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "I am going to think of 10 numbers between 1 and 10. Try to guess all of them and I'll tell you how good a guesser you are!";

function guessNumber() {
  global $play_count;
  global $correct_guesses;
  global $guess_high;
  global $guess_low;

  $play_count += 1;

  $number = rand(1, 10);
  echo "\nMake your guess: \n";
  
  $guess = readline(">> ");
  $guess = intval($guess);

  echo "\nRound $play_count: \nThe number was $number. \nYou guessed $guess.\n";

  if ($guess === $number) {
    $correct_guesses += 1;
  } elseif ($guess > $number) {
    $guess_high += 1;
  } else {
    $guess_low += 1;
  }
}

guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();

$percentage_correct = $correct_guesses / 10 * 100;
echo "\n You guessed correctly $percentage_correct% of the time.\n";

if ($guess_high > $guess_low) {
  echo "When you guessed wrong, you tended to guess high.";
} elseif ($guess_high < $guess_low) {
  echo "When you guessed wrong, you tended to guess low.";
}
