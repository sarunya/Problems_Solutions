public class LIS {
  public int lengthOfLIS(int[] nums) {
      int answer = 1;

      int[] dp = new int[nums.length];
      dp[0] = 1;

      for(int i=1; i<nums.length; i++) {
        dp[i] = 1;
        for(int j=i-1; j>=0; j--) {
          if(nums[j]<nums[i]) {
            dp[i] = Math.max(dp[i], dp[j]+1);
          }
        }
        answer = Math.max(dp[i], answer);
      }

      return answer;
  }

  public static void main(String[] args) {
    LIS obj = new LIS();
    int[] nums = new int[]{0,1,0,3,2,3};
    int answer = obj.lengthOfLIS(nums);
    System.out.println("Answer is "+answer);
  }
}