import java.util.Arrays;

public class StoneGameVII {
  
  public int stoneGameVII(int[] stones) {
        int sum = 0;
        int[][] dp = new int[stones.length][stones.length];
        for(int i=0; i<stones.length; i++) {
          sum += stones[i];
          Arrays.fill(dp[i], -1);
        }
        int answer = this._solveStoneGame(stones, 0, stones.length-1, sum, dp);

        for(int[] row : dp) {
          for(int cell: row) {
            System.out.print(cell+" , ");
          }
          System.out.println();
        }

        return answer;
  }


  public int _solveStoneGame(int[] stones, int s, int e, int remSum, int[][] dp) {
    if(dp[s][e]!=-1) {
      return dp[s][e];
    }
    if(s<e) {
      int left = (remSum-stones[s])-this._solveStoneGame(stones, s+1, e, remSum-stones[s], dp);
      int right = (remSum-stones[e])-this._solveStoneGame(stones, s, e-1, remSum-stones[e], dp);
      dp[s][e] = Math.max(left, right);
      return dp[s][e];
    }
    return 0;
  }
}