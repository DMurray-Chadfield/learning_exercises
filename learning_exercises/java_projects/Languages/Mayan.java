public class Mayan extends Language {
  public Mayan(String name, int numSpeakers) {
    super(name, numSpeakers, "Central America", "verb-object-subject");

  }

  @Override
  public void getInfo() {
    String info = name + " is spoken by " + numSpeakers + " people mainly in " + regionsSpoken + ". The language follows the word order: " + wordOrder + ". Fun fact: " + name + " is an ergative language.";
    System.out.println(info);
  }
}
