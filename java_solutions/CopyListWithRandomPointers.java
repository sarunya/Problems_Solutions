/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class CopyListWithRandomPointers {

  class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
      this.val = val;
      this.next = null;
      this.random = null;
    }
  }

  public Node copyRandomList(Node head) {
    Node current = head;
    //create copy nodes
    while(current!=null) {
      Node newNode = new Node(current.val);
      Node next = current.next;
      current.next = newNode;
      newNode.next = next;
      current = next;
    }
    //copy nodes created

    //copy random pointers
    current = head;
    while(current!=null) {
      Node crandom = current.random;
      Node nnode = current.next;
      if(crandom!=null) {
        Node nrandom = crandom.next;
        nnode.random = nrandom;
      }
      current = nnode.next;
    }
    //randome pointers copied

    //separate copy list
    Node newHead = null, previousn = null;
    while(current!=null) {
      Node nnode = current.next;
      if(newHead == null) {
        newHead = nnode;
      } else {
        previousn.next = nnode;
      }
      previousn = nnode;
      current = nnode.next;
    }

    return newHead;

  }
}