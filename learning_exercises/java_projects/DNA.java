public class DNA {
  public static void main(String[] args) {
    String dna1 = "ATGCGATACGCTTGA";
    String dna2 = "ATGCGATACGTGA";
    String dna3 = "ATTAATATGTACTGA";

    String dna = dna1;
    int length = dna.length();
    int startIndex = dna.indexOf("ATG");
    int stopIndex = dna.indexOf("TGA");

    if (startIndex != -1 && stopIndex != -1 && (stopIndex - startIndex + 3) % 3 == 0) {
      String protein = dna.substring(startIndex + 3, stopIndex);
      System.out.println(protein);
    } else {
      System.out.println("No protein.");
    }
  }
}
