import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CombinationSumII {

  private void _combinationCheck(int[] candidates, int index, int target, List<Integer> currentResult, List<List<Integer>> result) {
    if(target==0) {
      if(!result.contains(currentResult))
        result.add(new ArrayList<Integer>(currentResult));
      return;
    }

    for(int i=index; i<candidates.length; i++) {
      if(candidates[i] <= target) {
        currentResult.add(candidates[i]);
        _combinationCheck(candidates, i+1, target-candidates[i], currentResult, result);
        currentResult.remove(currentResult.size()-1);
      }
    }

  }

  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    Arrays.sort(candidates);
    List<List<Integer>> result = new ArrayList<>();
    List<Integer> currentResult = new ArrayList<Integer>();
    this._combinationCheck(candidates, 0, target, currentResult, result);

    return result;
  }

  public static void main(String[] args) {
    CombinationSumII obj = new CombinationSumII();
    int[] candidates = new int[]{10,1,2,7,6,1,5};
    int target = 8;
    List<List<Integer>> result = obj.combinationSum2(candidates, target);

    for(List<Integer> res: result) {
      for(int val : res) {
        System.out.print(val+" ");
      }
      System.out.println("---- End ----");
    }
  }
}