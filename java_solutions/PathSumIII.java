import java.util.*;


public class PathSumIII {

  class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
      this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  public int pathSum(TreeNode root, int targetSum) {
    Map<Integer, Integer> previousSum = new HashMap<Integer, Integer>();
    return this._pathSum(root, targetSum, 0, previousSum);
  }

  private int _pathSum(TreeNode root, int targetSum, int currentSum, Map<Integer, Integer> previousSum) {
    if(root==null) {
      //if leaf reached, find number of sub arrays with with sum
      return 0;
    } else {
      int resultHere = 0;
      currentSum += root.val;
      if(currentSum == targetSum) {
        resultHere = 1;
      }
      //if by removing prefix, the targetSum can be obtained
      //currentSum-prefix = targetSum
      //prefix = currentSum-targetSum
      if(previousSum.containsKey(currentSum - targetSum)) {
        //if already available
        resultHere += previousSum.get(currentSum-targetSum);
      }

      int count = previousSum.getOrDefault(currentSum, 0);
      previousSum.put(currentSum, count+1);

      //traverse left
      if(root.left!=null) {
        resultHere += this._pathSum(root.left, targetSum, currentSum, previousSum);
      }
      if(root.right!=null) {
        resultHere += this._pathSum(root.right, targetSum, currentSum, previousSum);
      }

      return resultHere;
    }
  }
}
