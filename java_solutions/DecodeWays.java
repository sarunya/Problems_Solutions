class DecodeWays {

  public int numDecodings(String s) {
    if (s.charAt(0) == '0') {
      return 0;
    }
    int dp[] = new int[s.length()];
    dp[0] = 1;
    int prevVal = Integer.parseInt("" + s.charAt(0));

    for (int index = 1; index < s.length(); index++) {
      int val = Integer.parseInt("" + s.charAt(index));
      dp[index] = (val > 0) ? dp[index - 1] : 0;

      if ((val <= 6 && prevVal == 2) || (prevVal == 1)) {
        dp[index] = (index - 2 >= 0) ? dp[index] + dp[index - 2] : dp[index] + 1;
      }

      if (dp[index] == 0) {
        return 0;
      }
      prevVal = val;
    }

    return dp[s.length() - 1];
  }

}