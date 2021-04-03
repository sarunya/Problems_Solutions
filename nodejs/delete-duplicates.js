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
var deleteDuplicates = function(head) {
    let current = head, prev=null;
    
    while(current!=null) {
        let count = 0;
        let checkNode = current.next;
        while(checkNode!=null && checkNode.val == current.val) {
            ++count;
            checkNode = checkNode.next;
        }
        if(count == 0 ) {
            if(prev == null) {
                head = current;
            }
            prev = current;
            current = current.next;
        } else {
            if(prev!=null)
                prev.next = checkNode;
            current = checkNode;
        }
    }
    if(prev == null) {
        return null;
    }
    return head;
    
};