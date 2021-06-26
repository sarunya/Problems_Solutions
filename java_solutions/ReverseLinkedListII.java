import java.util.Currency;

public class ReverseLinkedListII {

   class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
      this.val = val;
    }

    ListNode(int val, ListNode next) {
      this.val = val;
      this.next = next;
    }
  }
 
  public ListNode reverseBetween(ListNode head, int left, int right) {
    //Initialize
    int position = 1;
    ListNode current = head, leftPrev = null, leftNode = null;

    while(current!=null && position < left) {
      leftPrev = current;
      current = current.next;
      ++position;
    }

    leftNode = current;

    //reverse
    ListNode prev = null, next = null;
    while(position<=right) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      ++position;
    }

    if(left==1) {
      head = prev;
    } else {
      leftPrev.next = prev;
    }
    leftNode.next = current;

    return head;
  }
}