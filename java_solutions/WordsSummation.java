public class WordsSummation {
  public static void main(String[] args) {
    WordsSummation obj = new WordsSummation();

    String[] tokens = new String[] { "2", "1", "+", "3", "*" };
    System.out.println("" + obj.evalRPN(tokens));
  }
}
