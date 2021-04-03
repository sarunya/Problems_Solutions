/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ll1 = [], ll2 = [];
    let lc1 = l1, lc2 = l2;
    
    while(lc1!=null || lc2!=null){
        if(lc1) {
            ll1.push(lc1);
            lc1 = lc1.next;
        }
        
        if(lc2) {
            ll2.push(lc2);
            lc2 = lc2.next;
        }
    }
    
    let reminder = 0;
    
    if(ll1.length < ll2.length) {
        let temp = ll1;
        ll1 = ll2;
        ll2 = temp;
        
        temp = l1;
        l1 = l2;
        l2 = temp;
    }
    
    while(ll1.length >0 && ll2.length>0) {
        let node = ll1.pop();
        let sum = node.val + ll2.pop().val + reminder;
        let val = sum % 10;
        reminder = Math.floor(sum/10);
        
        node.val = val;
        // console.log(sum, val, reminder);
    }
    
    while(ll1.length > 0){
        let node = ll1.pop();
        let sum = node.val + reminder;
        let val = sum % 10;
        reminder = Math.floor(sum/10);
        node.val = val;
    }
    
    if(reminder > 0) {
        let head = new ListNode(reminder, l1);
        return head;
    } else {
        return l1;
    }
};