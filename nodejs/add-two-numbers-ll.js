/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let r = 0;
  let num;
  let l1Prev = null;
  let head = l1;
  while(l1!=null && l2!=null) {
      num = l1.val+l2.val+r;
      l1.val=num%10;
      r=Math.floor(num/10);
      l1Prev = l1;
      l1=l1.next;
      l2=l2.next;
  }
  while(l1!=null) {
      num = l1.val+r;
      l1.val=num%10;
      r=Math.floor(num/10);
      l1Prev = l1;
      l1=l1.next;
  }
  while(l2!=null) {
      num = l2.val+r;
      l2.val=num%10;
      r=Math.floor(num/10);
      l1Prev.next=l2;
      l1Prev=l2;
      l2=l2.next;
  }
  if(r>0) {
      let node = new ListNode(r);
      l1Prev.next = node;
      l1Prev=node;
      r=0;
  }
  if(l1Prev!=null) 
      l1Prev.next=null;
  return head;
};
