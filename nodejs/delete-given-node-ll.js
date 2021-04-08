/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
  let nextNode = node.next, lastNode = null;
  
  //copy values of next node to current node
  while(nextNode!=null) {
      node.val = nextNode.val;
      lastNode = node;
      node = node.next;
      nextNode = nextNode.next;
  }
  
  if(lastNode) {
      lastNode.next = null
  } 
  
};