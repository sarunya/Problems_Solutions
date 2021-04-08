/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head, slow = head;
    
    while(slow && fast && fast.next!=null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast!=null) {
        slow = slow.next;
    }
    
    //reverse slow pointer till end
    let revHead = null;
    while(slow!=null) {
        let next = slow.next;
        slow.next = revHead;
        revHead = slow;
        slow = next;
    }
    
    
    while(revHead!=null) {
        if(head.val != revHead.val) {
            return false;
        }
        head = head.next;
        revHead = revHead.next;
    }
    return true;
};