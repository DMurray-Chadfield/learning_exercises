public class Language {
  protected String name;
  protected int numSpeakers;
  protected String regionsSpoken;
  protected String wordOrder;

  public Language(
    String name,
    int numSpeakers,
    String regionsSpoken,
    String wordOrder
  ) {
    this.name = name;
    this.numSpeakers = numSpeakers;
    this.regionsSpoken = regionsSpoken;
    this.wordOrder = wordOrder;
  }

  public void getInfo() {
    String info = name + " is spoken by " + numSpeakers + " people mainly in " + regionsSpoken + ". The language follows the word order: " + wordOrder + ".";
    System.out.println(info);
  }

  public static void main(String[] args) {
    Language german = new Language("German", 1000000, "Germany", "subject-verb-object");
    german.getInfo();
    Mayan chontol = new Mayan("Chontol", 36000);
    chontol.getInfo();
    

    SinoTibetan mandarin = new SinoTibetan("Mandarin Chinese", 5000000);
    SinoTibetan burmese = new SinoTibetan("Burmese", 100000);
    mandarin.getInfo();
    burmese.getInfo();
  }
}
