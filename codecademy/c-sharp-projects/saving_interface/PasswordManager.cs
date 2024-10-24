using System;

namespace SavingInterface
{
  class PasswordManager : IDisplayable, IResetable
  {
    private string password;
    private string Password
    { 
      get {return this.password;} 
      set
      {
        if (value.Length >= 8) {this.password = value;} else {this.password = "";} 
      } 
    }

    public bool Hidden
    { get; private set; }

    public char HeaderSymbol { get; }

    public PasswordManager(string password, bool hidden)
    {
      this.Password = password;
      this.Hidden = hidden;
      this.HeaderSymbol = '-';
    }
    
    public void Display()
    {
      Console.WriteLine("Password");
      Console.WriteLine(new string(HeaderSymbol, 8));
      if (this.Hidden)
      {
        for (int i = 0; i < this.Password.Length; i++)
        {
          Console.Write("*");
        }
        Console.WriteLine();
        Console.WriteLine();
      } else
      {
        Console.WriteLine(this.Password);
        Console.WriteLine();
      }
    }

    public void Reset()
    {
      Console.WriteLine("Resetting...");
      this.Password = "";
      this.Hidden = false;
    }

    public bool ChangePassword(string currentPassword, string newPassword) 
    {
      if (currentPassword == this.Password || this.Password == "")
      {
        this.Password = newPassword;
        return true;
      } else
      {
        return false;
      }
    }
  }
}
