import java.util.*;

public class Subsets {
  public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<List<Integer>>();

    //iterate from 0 to (2^len)-1
    for(int i=0; i<(1<<nums.length); i++) {
      int val = i, j = 0;
      List<Integer> currentResult = new ArrayList<Integer>();
      while(val>0) {
        //check if last bit is set
        if((val&1) > 0) {
          currentResult.add(nums[j]);
        }
        ++j;
        val = val>>1;
      }
      result.add(currentResult);
    }

    return result;
  }
}
