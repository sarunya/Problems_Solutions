import java.util.*;

public class NextRightPointers {

  // Definition for a Node.
  class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {
    }

    public Node(int _val) {
      val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
      val = _val;
      left = _left;
      right = _right;
      next = _next;
    }
  };

  public Node connect(Node root) {
    Queue<Node> queue = new LinkedList<Node>();

    if(root!=null) {
      queue.add(root);
    }

    while(!queue.isEmpty()) {
      Queue<Node> nextLevel = new LinkedList<Node>();
      Node next = null;
      while(!queue.isEmpty()) {
        Node node = queue.poll();
        if(node.right != null) {
          nextLevel.add(node.right);
        }
        if(node.left != null) {
          nextLevel.add(node.left);
        }
        node.next = next;
        next = node;
      }
      queue = nextLevel;
    }
    
    return root;
  }
}