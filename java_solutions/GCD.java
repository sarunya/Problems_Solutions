public class GCD {
  // Recursive function to return gcd of a and b
  static int gcd(int a, int b) {
    System.out.println(a+" "+b);
    if (b == 0)
      return a;
    return gcd(b, a % b);
  }

  // Driver method
  public static void main(String[] args) {
    int a = 3, b = 2;
    System.out.println("GCD of " + a + " and " + b + " is " + gcd(a, b));
  }
}
