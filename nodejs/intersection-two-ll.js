//with O(n) extra space 
var getIntersectionNode = function(headA, headB) {
  let travA = headA;
  
  while(travA) {
      travA.traversed = true;
      travA = travA.next;
  }
  
  let travB = headB;
  
  while(travB) {
      if(travB.traversed == true) {
          break;
      }
      travB = travB.next;
  }
  return travB;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  let lena = 0, lenb=0, travA = headA, travB = headB;
  let lasta = headA, lastb = headB;
  
  while(travA!=null || travB!=null) {
      if(travA) {
          lasta = travA;
          travA = travA.next;
          ++lena;
      }
      if(travB) {
          lastb = travB;
          travB = travB.next;
          ++lenb;
      }
  }
  
  if(lasta != lastb) {
      return null;
  }
  
  travA = headA;
  travB = headB;
  
  while (lena < lenb) {
      travB = travB.next;
      --lenb;
  }
  
  while (lenb < lena) {
      travA = travA.next;
      --lena;
  }
  
  while(travA.next !=null && travB.next!=null && travA != travB) {
      travA = travA.next;
      travB = travB.next;
  }
  return travA;
};