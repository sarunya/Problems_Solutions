// package java_solutions;


import java.util.*;
import java_solutions.TreeNode;

class Solution {
    
  class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
  }

  public void deleteNodes(TreeNode node, TreeNode parent, Set<Integer> deleteSet, List<TreeNode> result) {
    if(node) {
      if(deleteSet.contains(node.val)) {
        if(parent!=null && parent.left == node)
          parent.left = null;
        if(parent!=null && parent.right == node)
          parent.right = null;
        
        parent = null;
      } else {
        parent = node;
      }
      if(node.left!=null && parent==null && !deleteSet.contains(node.left.val)) {
        result.add(node.left);
      }
      if(node.right!=null && parent==null && !deleteSet.contains(node.right.val)) {
        result.add(node.right);
      }
      if(node.left!=null) {
        deleteNodes(node.left, parent, deleteSet, result);
      }
      if(node.right!=null) {
        deleteNodes(node.left, parent, deleteSet, result);
      }
    }
  }
  
  public List<TreeNode> delNodes(TreeNode root, int[] to_delete) {
      List<TreeNode> result = new ArrayList<TreeNode>();
      Set<Integer> deleteSet = new HashSet<Integer>();
      for(int val: to_delete) {
        deleteSet.add(val);
      }
      if(root==null) {
        return result;
      } else {
        this.deleteNodes(root, null, deleteSet, result);
        return result;
      }
  }
}