using System;

namespace DatingProfile
{
  class Profile {
    // Fields
    private string name;
    private int age;
    private string city;
    private string country;
    private string pronouns;
    private string[] hobbies;

    // Constructors
    public Profile(
      string Name,
      int Age,
      string City,
      string Country,
      string Pronouns = "they/them"
    ) {
      this.name = name;
      this.age = age;
      this.city = city;
      this.country = country;
      this.pronouns = pronouns;
      this.hobbies = new string[] {"nothing"};
    }

    // Methods
    public string ViewProfile() {
      if (this.hobbies.Length > 1) {
        return $"{this.name} is {this.age} years old, lives in {this.city}, {this.country}, and uses {this.pronouns} pronouns. Their hobbies include {String.Join(", ", this.hobbies, 0, this.hobbies.Length - 1)}, and {this.hobbies[this.hobbies.Length - 1]}.";
      } else {
        return $"{this.name} is {this.age} years old, lives in {this.city}, {this.country}, and uses {this.pronouns} pronouns. Their hobbies include {String.Join("", hobbies)}.";
      }  
    }

    public void SetHobbies(string[] hobbies) {
      this.hobbies = hobbies;
    }

    // Properties
    private string Name {get; set;}
    private int Age {get; 
    set {
      if (value < 18) {
        Console.WriteLine("Users must be over 18.");
      } else {
        this.Age = value;
      }
    }
    }
    private string City {get; set;}
    private string Country {get; set;}
    private string Pronouns {get; set;}
  }
  
}
