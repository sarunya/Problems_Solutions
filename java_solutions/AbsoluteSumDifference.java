public class AbsoluteSumDifference {
  public int[] getSumAbsoluteDifferences(int[] nums) {

    int n = nums.length;
    int[] result = new int[n];

    int[] prefix = new int[n];
    prefix[0] = nums[0];

    //compute prefix sum
    for(int i=1; i<n; i++) {
      prefix[i] = prefix[i-1]+nums[i];
    }

    //run through all elements in nums
    for(int i=0; i<n; i++) {

      //compute prefix difference, as prefix sum is available
      //nums[i]*(i-1)- prefixSum 
      int prefixVal = 0, suffixVal = 0;
      if(i>0) {
        prefixVal = (nums[i]*i) - prefix[i-1];
      }

      //compute suffix difference : suffixSum - nums[i]*(n-i+1)
      if(i<n-1) {
        suffixVal = (prefix[n-1]-prefix[i]) - (nums[i]*(n-1-i));
      }
      //include in result
      result[i] = prefixVal+suffixVal;
    }

    return result;
  }
}