using System;

namespace SavingInterface
{
  class TodoList : IDisplayable, IResetable
  {
    public string[] Todos
    { get; private set; }

    private int nextOpenIndex;

    public char HeaderSymbol { get; }

    public TodoList()
    {
      this.Todos = new string[5];
      this.nextOpenIndex = 0;
      this.HeaderSymbol = '-';
    }

    public void Add(string todo)
    {
      Todos[nextOpenIndex] = todo;
      nextOpenIndex++;
    }
    
    public void Display()
    {
      Console.WriteLine("Todos");
      Console.WriteLine(new string(HeaderSymbol, 8));
      for (int i = 0; i < this.nextOpenIndex; i++)
      {
        Console.WriteLine(Todos[i]);
      }
      Console.WriteLine();
    }

    public void Reset()
    {
      Console.WriteLine("Resetting...");
      this.Todos = new string[5];
      this.nextOpenIndex = 0;
    }
  }
}
