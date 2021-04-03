/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let current = list1;
    
    //traverse current till a
    let i = 0;
    let prev = null;
    while(i<a) {
        prev = current;
        current = current.next;
        ++i;
    }
    
    //point prev's next to head of list2
    if(prev) {
        prev.next = list2;
    } else {
        list1 = list2;
    }
    
    //traverse till b
    while(i<b) {
        current = current.next;
        ++i;
    }
    
    if(current && current.next) {
        
        //find end of list2
        while(list2 && list2.next) {
            list2 = list2.next;
        }

        list2.next = current.next;
    }
    
    return list1;
};