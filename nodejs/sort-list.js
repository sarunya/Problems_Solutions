//https://leetcode.com/problems/sort-list/

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
var sortList = function(head) {
    return mergeSort(head);
};

function mergeSort(head) {   
    if(head && head.next) {
        let head2 = splitMiddle(head);
        head = mergeSort(head);
        head2 = mergeSort(head2);
        // console.log("merge here", head.val, head2.val);
        let bef, mergedHead = null, selNode;
        while(head && head2) {
            if(head.val < head2.val) {
                selNode = head;
                head = head.next;
            } else {
                selNode = head2;
                head2 = head2.next;
            }
            if(!mergedHead) {
                mergedHead = selNode;
            } else {
                bef.next = selNode;
            }
            bef = selNode;
            selNode.next = null;
        }
        if(head) {
            bef.next = head;
        }
        if(head2) {
            bef.next = head2;
        }
        return mergedHead;
    }
    return head;
}

function print(head) {
    // console.log("mergehead");
    while(head) {
        console.log(head.val);
        head = head.next;
    }
}

function splitMiddle(head) {
    let slow = head, fast = head, split1;
    
    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    split1 = slow.next;
    slow.next = null;
    return split1;
}