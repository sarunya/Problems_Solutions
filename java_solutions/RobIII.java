import java.util.*;

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
public class RobIII {

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

  public int rob(TreeNode root) {

    // get all level sums in list
    List<Integer> levelSum = new ArrayList<Integer>();
    this.getLevelSum(root, levelSum);

    // get max robbed without adjacent
    return this.maxRob(levelSum);
  }

  public int maxRob(List<Integer> levelSum) {
    if (levelSum.size() == 1) {
      return levelSum.get(0);
    }
    int n = levelSum.size();
    int lastp2 = levelSum.get(n - 1);
    int lastp1 = Math.max(levelSum.get(n - 2), levelSum.get(n - 1));

    for (int i = n - 3; i >= 0; i--) {
      int last = Math.max(levelSum.get(i) + lastp2, lastp1);
      lastp2 = lastp1;
      lastp1 = last;
    }
    return lastp1;
  }

  public void getLevelSum(TreeNode root, List<Integer> levelSum) {
    Queue<TreeNode> queue = new LinkedList<TreeNode>();
    Queue<TreeNode> tempQueue = new LinkedList<TreeNode>();

    if (root != null) {
      queue.add(root);
    }

    while (!queue.isEmpty()) {
      int currentLevelSum = 0;

      while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        currentLevelSum += node.val;
        if (node.left != null) {
          tempQueue.add(node.left);
        }
        if (node.right != null) {
          tempQueue.add(node.right);
        }
      }

      levelSum.add(currentLevelSum);
      queue.addAll(tempQueue);
      tempQueue.clear();
    }
  }

}