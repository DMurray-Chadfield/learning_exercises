using System;

namespace TrueOrFalse
{
  class Program
  {
		static void Main(string[] args)
    {
      // Do not edit these lines
      Console.WriteLine("Welcome to 'True or False?'\nPress Enter to begin:");
      string entry = Console.ReadLine();
      Tools.SetUpInputStream(entry);

      // Type your code below
      string[] questions = {
        "Silence is a trad route.",
        "Dynamic belays are dangerous.",
        "You should never climb on wet sandstone.",
        "Trad is rad.",
        "Jerry's Problem is soft."
        };

      bool[] answers = {false, false, true, true, false};

      bool[] responses = new bool[answers.Length];

      if (questions.Length != answers.Length) {
        Console.WriteLine("Warning: questions and answers array have different lengths.");
      }

      int askingIndex = 0;
      foreach (string question in questions) {
        string input;
        bool isBool;
        bool inputBool;

        Console.WriteLine(question);
        input = Console.ReadLine().ToLower();

        isBool = Boolean.TryParse(input, out inputBool);

        while (!isBool) {
          Console.WriteLine("Please respond with 'true' or 'false'.");
          input = Console.ReadLine().ToLower();
          isBool = Boolean.TryParse(input, out inputBool);
        }

        responses[askingIndex] = inputBool;
        askingIndex++;
      }

      int scoringIndex = 0;
      int score = 0;

      foreach (bool answer in answers) {
        bool response = responses[scoringIndex];
        Console.WriteLine($"{scoringIndex + 1}) Input: {response} | Answer: {answer}");

        if (answer == response) {
          score++;
        }

        scoringIndex++;
      }

      Console.WriteLine($"You got {score} out of 5 correct!");
    }
  }
}
