//https://leetcode.com/problems/middle-of-the-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  let length = findLen(head);
  let middle = Math.ceil(length/2);
  if(length%2==1) {
      --middle;
  }
  while(middle>0) {
      head = head.next;
      --middle;
  }
  return head;
};

var findLen = function(head) {
  let root = head;
  let len = 0;
  while(root!=null) {
      root = root.next;
      ++len;
  }
  return len;
}