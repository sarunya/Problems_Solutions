public class NumberWaysSplitString {
  public int numWays(String s) {
    long totalOnesCount = 0;
    long mod = 1000000007;
    long waysOfFirstString = 0;
    long waysOfSecondString = 0;
    long onesCount = 0;
    long n = s.length();

    // Count the number of ones
    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '1') {
        totalOnesCount += 1;
      }
    }

    // If not divisible by 3 return 0
    if (totalOnesCount % 3 != 0) {
      return 0;
    }

    // Find how many ones should be there in each parts.
    long onesFirstPart = totalOnesCount / 3;
    long onesSecondPart = onesFirstPart * 2;

    // If there are no ones, return all possible ways to devide string in to 3
    // parts.
    if (totalOnesCount == 0) {
      return (int) ((n - 1) * (n - 2) / 2 % mod);
    }

    for (int i = 0; i < s.length(); i++) {
      // Count how many 1s we have encountered so far.
      if (s.charAt(i) == '1') {
        onesCount += 1;
      }
      // if(onesCount == onesFirstPart) these are the ways we can make the first
      // string.
      if (onesCount == onesFirstPart) {
        waysOfFirstString += 1;
      }
      // if(onesCount == onesSecondPart) these are the ways we can make the second
      // string.
      else if (onesCount == onesSecondPart) {
        waysOfSecondString += 1;
      }
      // if (onesCount > onesSecondPart) we have already created 3 strings no use of
      // checking further.
      else if (onesCount > onesSecondPart) {
        break;
      }
    }

    return (int) ((waysOfFirstString * waysOfSecondString) % mod);
  }

  public static void main(String[] args) {
    NumberWaysSplitString obj = new NumberWaysSplitString();
    int result = obj.numWays("100100010100110");
    System.out.println("Result is " + result);
  }
}