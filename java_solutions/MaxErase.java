import java.util.*;

public class MaxErase {

  public static void main(String[] ags) {
    int[] nums = new int[]{187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434};
    int result = maximumUniqueSubarray(nums);
    System.out.println("The result is "+result);
  }

  public static int maximumUniqueSubarray(int[] nums) {
    Set<Integer> set = new HashSet<Integer>();
    Map<String, Integer> frequency = new HashMap<String, Integer>();
    
    int resultSoFar = 0, maxResultTotal = 0, j=0;
    for(int i=0; i<nums.length; i++) {
      if(set.contains(nums[i])) {
        //remove all values from
        System.out.println("duplicate value is "+nums[i]);
        while(j<i && nums[j]!=nums[i]) {
          resultSoFar -= nums[j];
          set.remove(nums[j]);
          ++j;
        }
        ++j;
      } else {
        set.add(nums[i]);
        resultSoFar += nums[i];
      }
      System.out.println("values is "+resultSoFar+" "+maxResultTotal+" "+set.size());
      maxResultTotal = Math.max(resultSoFar, maxResultTotal);
    }

    System.out.println("start is "+j);

    return maxResultTotal;
  }

}