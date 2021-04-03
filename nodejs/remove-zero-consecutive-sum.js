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
var removeZeroSumSublists = function(head) {
    let arr = [], sumhash = {}, sum = 0, current = head, prev;
    
    while(current) {
        arr.push(current);
        sum += current.val;
        
        if(sum==0 || sumhash[sum]) {
            let localSum = arr.pop().val;
            let sumsofar = sum - localSum;
            while(arr.length>0 && localSum!=0) {
                -- sumhash[sumsofar] 
                let popedVal = arr.pop();
                localSum += popedVal.val;
                sumsofar -= popedVal.val;
            }
            if(arr.length > 0) {
                arr[arr.length-1].next = current.next;
            }
            
        } else {
            sumhash[sum] = 1;
        }
        current = current.next;
    }
    
    if(arr.length==0) {
        head = null;
    } else {
        head = arr[0];
        arr.pop().next = null;
    }    
    return head;
    
};


// 1 2 -3 3 1
// 1 3  0 3 4


// 1 2 3 -3 4
// 1 3 6  3 7

// 1 2 3 -3 -2
// 1 3 6  3  1


//6 -5 -2 8 -6
//6  1 -1 7  1
// 1 -1
// 1  0

//  -1     1   -2 -1
//  -1     0   -2 -3
//  -1     -2  -3  -1

//  5 -2 -3
//  5  3  0

