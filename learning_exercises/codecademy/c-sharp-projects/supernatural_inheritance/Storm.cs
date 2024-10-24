// Storm.cs
using System;

namespace MagicalInheritance
{
  class Storm
  {
    public string Essence
    { get; private set; }

    public bool IsStrong
    { get; private set; }

    public string Caster
    { get; private set; }

    public Storm(string essence, bool isStrong, string caster)
    {
      this.Essence = essence;
      this.IsStrong = isStrong;
      this.Caster = caster;
    }

    public string Announce()
    {
      if (this.IsStrong)
      {
        return $"{this.Caster} cast a strong {this.Essence} storm!";
      } else
      {
        return $"{this.Caster} cast a weak {this.Essence} storm!";
      }
    }
  }
}
