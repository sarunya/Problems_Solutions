/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */

 function getHashOfG(G) {
  let ghash = {};
  for(let i of G) {
      ghash[i] = false;
  }
  return ghash;
}

function traverseNode(node, ghash) {
  let current = node;
  while(current != null && ghash[current.val]==false) {
      ghash[current.val] = true;
      current = current.next;
  }
  return 1;
}

var numComponents = function(head, G) {
  let ghash = getHashOfG(G);
  
  //traverse over head;
  let current = head, nonVisitedCount = G.length, count = 0;
  
  while(current!=null && nonVisitedCount >0 ) {
      
      if(ghash[current.val]==false) {
          traverseNode(current, ghash);
          ++count;
      }
      
      current = current.next;
      
  }
  return count;
  
};