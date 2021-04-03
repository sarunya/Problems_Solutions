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
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    if(!slow || !fast.next) {
        return null;
    }
    while(slow && fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast==slow) {
            break;
        }
    }
    if(fast!=slow) {
        return null;
    }
    slow = head;
    while(fast!=slow){
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};