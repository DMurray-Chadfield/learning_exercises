using System;

namespace CaesarCipher
{
  class Program
  {
    static void Main(string[] args)
    {
      
      Console.WriteLine("What is your secret message?");
      string secretMessageString = Console.ReadLine().ToLower();
      char[] secretMessage = secretMessageString.ToCharArray();

      Console.WriteLine(Encrypt(secretMessage));
    }

    static string Encrypt(char[] secretMessage) {
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

      char[] encryptedMessage = new char[secretMessage.Length];

      for (int i = 0; i < secretMessage.Length; i++) {
        char character = secretMessage[i];
        int position = Array.IndexOf(alphabet, character);
        if (position == -1) {
          encryptedMessage[i] = character;
          continue;
        }
        int newPosition = (position + 3) % 26;
        char newCharacter = alphabet[newPosition];
        encryptedMessage[i] = newCharacter;
      }

      string encryptedMessageString = String.Join("", encryptedMessage);
      return encryptedMessageString;
    }
  }   
}
