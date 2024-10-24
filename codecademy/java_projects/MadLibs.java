public class MadLibs {
  /*
  This program generates a mad libbed story.
  Author: Dan
  Date: 17/02/2022
  */
  	public static void main(String[] args){
      
      String name1 = "Dan";
      String adjective1 = "good";
      String adjective2 = "excellent";
      String adjective3 = "cross";
      String verb1 = "dance";
      String noun1 = "dude";
      String noun2 = "cereal";
      String noun3 = "music";
      String noun4 = "reporters";
      String noun5 = "water";
      String noun6 = "leopard";
      String name2 = "Grace";
      int number = 3000;
      String place1 = "America";
      
      //The template for the story
      String story = "This morning "+name1+" woke up feeling "+adjective1+". 'It is going to be a "+adjective2+" day!' Outside, a bunch of "+noun1+"s were protesting to keep "+noun2+" in stores. They began to "+verb1+" to the rhythm of the "+noun3+", which made all the "+noun4+"s very "+adjective3+". Concerned, "+name1+" texted "+name2+", who flew "+name1+" to "+place1+" and dropped "+name1+" in a puddle of frozen "+noun5+". "+name1+" woke up in the year "+number+", in a world where "+noun6+"s ruled the world.";

      System.out.println(story);
    }       
}
