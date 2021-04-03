/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    let splitArr = [];
    let length = findLen(root);
    let split = Math.floor(length/k);
    let reminder = length - (k*split);
    
    let current = root;
    while(k>0) {
        let i = split;
        if(reminder) {
            ++i;
            --reminder;
        }
        if(i==0 || !current) {
            splitArr.push(null);
        } else {
            splitArr.push(current);
            while(i>1 && current) {
                current = current.next;
                --i;
            }
        }
        if(current) {
            let nextc = current.next;
            current.next = null;
            current = nextc;
        }
        --k;
    }
    return splitArr;
};


function findLen(root) {
   let head = root, length = 0; 
    while(head!=null) {
        ++length;
        head =head.next;
    }
    return length;
}