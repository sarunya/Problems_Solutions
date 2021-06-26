import java.util.*;

public class PalindromePartitioning {
  
  public List<List<String>> partition(String s) {
    List<List<String>> result = new ArrayList<List<String>>();
    List<String> curResult = new ArrayList<String>();
    int[][] dp = new int[s.length()][s.length()];

    this.solvePartition(s, 0, curResult, result, dp);

    return result;
  }

  public boolean checkPalindrome(String str, int s, int e, int[][] dp) {
    if(dp[s][e]==1 || dp[s][e]==-1) {
      return dp[s][e]==1;
    }
    while(s<e && str.charAt(s)==str.charAt(e)) {
      ++s;
      --e;
    }
    dp[s][e] = (s>=e) ? 1 : -1;
    return dp[s][e]==1;
  }


  public void solvePartition(String s, int index, List<String> curResult, List<List<String>> result, int[][] dp) {
    if(index == s.length()) {
      result.add(new ArrayList<String>(curResult));
    }
    for(int i = index; i<s.length(); i++) {
      if(this.checkPalindrome(s, index, i, dp)) {
        //then add it to current result
        String subs = s.substring(index, i+1);
        curResult.add(subs);
        solvePartition(s, i+1, curResult, result, dp);
        curResult.remove(curResult.size()-1);
      }
    }
  }
}
