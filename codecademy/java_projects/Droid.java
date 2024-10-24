public class Droid {
  String name;
  int batteryLevel;

  public Droid(String droidName) {
    name = droidName;
    batteryLevel = 100;
  }
  
  public String toString() {
    return "Hello, I'm the droid:\n" + name;
  }

  public void performTask(String task) {
    System.out.println(name + " is performing task:\n" + task);
    batteryLevel -= 10;
  }

  public void energyReport() {
    System.out.println(name + " is at battery level:\n" + batteryLevel + "%");
  }

  public static void main(String[] args) {
    Droid codey = new Droid("Codey");
    System.out.println(codey);
    codey.performTask("laundry");
    codey.performTask("exercise");
    codey.performTask("cleaning");
    codey.energyReport();
  }
}
