package main

import (
  "fmt"
)

func main() {
  var name string
  fmt.Println("What is your name?")
  fmt.Scan(&name)
  fmt.Printf("Hello %s \n", name)

  var age int
  fmt.Println("How old are you?")
  fmt.Scan(&age)
  fmt.Printf("%s is %d years old \n", name, age)

  var newMessage string = fmt.Sprintf("This is some other message containing %s and %d", name, age)
  fmt.Println(newMessage)
}
