using System;

namespace ArchitectArithmetic
{
  class Program
  {
    public static void Main(string[] args)
    {
      //Check methods work
      Console.WriteLine(Rect(4, 5));
      //Returns 20
      Console.WriteLine(Circ(4));
      //Returns ~50
      Console.WriteLine(Tri(10, 9));
      //Returns 45

      //Calculate floor area
      Console.WriteLine(CalculateTotalCost());
    }
    static double Rect(double length, double width) {
      return length * width;
    }
    static double Circ(double radius) {
      double pi = Math.PI;
      return pi * Math.Pow(radius, 2);
    }
    static double Tri(double bottom, double height) {
      return 0.5 * bottom * height;
    }
    static string CalculateTotalCost() {
      double circle = Circ(375);
      double triangle = Tri(750, 500);
      double rectangle = Rect(2500, 1500);
      double area = rectangle + triangle + (circle / 2);

      //Multiply by material cost
      double cost = area * 180;

      //Print to console
      return $"The material cost for this floorplan is {Math.Round(cost, 2, MidpointRounding.AwayFromZero)} Mexican pesos.";
    }
  }
}
