/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let current = head, arr = [], stack = [], result = [];
    
    while(current!=null) {
        arr.push(current);
        current = current.next;
    }
    
    let i=arr.length-1;
    result[i] = 0 ;
    stack.push(arr[i].val);
    --i;
    while(i>=0) {
        while(arr[i].val >= stack[stack.length-1]) {
            stack.pop();
        }
        if(stack.length > 0) {
            result[i] = stack[stack.length-1];
        } else {
            result[i] = 0;
        }
        stack.push(arr[i].val);
        --i;
    }
    return result;
};