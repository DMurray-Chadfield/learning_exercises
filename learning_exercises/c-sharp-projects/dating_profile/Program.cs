using System;

namespace DatingProfile
{
  class Program
  {
    static void Main(string[] args)
    {
      Profile sam = new Profile(
        "Sam Drakkila",
        30,
        "New York",
        "USA",
        "he/him"
      );
      sam.SetHobbies(new string[] {"reading", "hiking", "listening to music"});
      Console.WriteLine(sam.ViewProfile());
    }
  }
}
