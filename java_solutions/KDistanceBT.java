import java.util.*;

public class KDistanceBT {

  public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
      this.val = x;
      this.left = null;
      this.right = null;
    }
  }

  // public class TreeNodeDepth {
  //   int depth;
  //   TreeNode node;

  //   TreeNodeDepth(TreeNode node, int x) {
  //     this.depth = x;
  //     this.node = node;
  //   }
  // }

  public List<Integer> TreeNodeDepth(TreeNode root, TreeNode target) {

  }

  public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
    int depth=0, td=0;
    Queue<TreeNode> queue = new LinkedList<TreeNode>();
    boolean isTargetFound = false;
    List<List<Integer>> parentLevelValues = new ArrayList<List<Integer>>();
    List<Integer> level = new ArrayList<Integer>();
    List<Integer> result = new ArrayList<Integer>();

    level.add(root.val);
    if(k==0) {
      return level;
    }

    if(root==target) {
      isTargetFound = true;
    } else {
      queue.add(root);
    }
    
    while(!queue.isEmpty() && (!isTargetFound || td+k<depth)) {
      Queue<TreeNode> tempQueue = new LinkedList<TreeNode>();
      tempQueue.addAll(queue);
      if(!isTargetFound)
      parentLevelValues.add(level);
      queue.clear();
      level.clear();

      while(!tempQueue.isEmpty()) {
        TreeNode node = tempQueue.poll();
        if(node.left==target || node.right==target) {
          isTargetFound = true;
          td = depth+1;
          break;
        }
        if(node.left!=null) {
          queue.add(node.left);
          level.add(node.left.val);
        }
        if(node.right!=null) {
          queue.add(node.right);
          level.add(node.right.val);
        }
      }
      ++depth;
    }

    return result;
  }
}
