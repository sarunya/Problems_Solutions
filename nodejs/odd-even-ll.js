//https://leetcode.com/problems/odd-even-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
  if(head) {
      let odd = null, ocur = null, even = null, ecur = null;
      while(head) {
          if(!odd) {
              odd = head;
          } else {
              ocur.next = head;  
          }
          ocur = head;
          head = head.next;
          ocur.next = null;
          if(head) {
              if(!even) {
                  even = head;
              } else {
                  ecur.next = head;
              }
              ecur = head;
              head = head.next;
              ecur.next = null;
          }
      }
      if(!odd) {
          head = even;
      } else {
          head = odd;
          ocur.next = even;
      }
  }
  return head;
};