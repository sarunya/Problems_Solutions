/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let heap = [];
    
    //remove empty array
    for(let i = 0; i<lists.length;i++) {
        if(lists[i]){
            heap.push(lists[i]);
        }
    }
    lists = heap;
    
    let head = null, current = null;
    minHeapify(lists, 0);
    
    //update head
     while(lists.length > 0 ) { 
         
        if(head == null && lists[0]) {
            head = lists[0];
            current = lists[0];
        } else if(lists[0]){
            current.next = lists[0];
            current = current.next;
        }
        if(lists[0]) {
            lists[0] = lists[0].next;
            current.next = null;
        } 
        if(!lists[0]) {
            //remove lists[0] from list
            lists.shift();
            minHeapify(lists, 0);
        }
        if(lists.length > 1) {
            buildHeap(lists, 0)
        }
     }
    return head;
    
};



var minHeapify = function(lists, i) {
    let len = Math.floor(lists.length/2)-1;
    for(let i = len ;i>=0; i--) {
        buildHeap(lists, i);
    }
}

var buildHeap = function(lists, i) {
    let left = (2*i)+1;
    let right = (2*i)+2;
    let minIndex = i;
    if(!lists[i]) {
        return;
    }
    if(left < lists.length && lists[left] && lists[left].val <= lists[minIndex].val) {
        minIndex = left;
    }
    if(right < lists.length && lists[right] && lists[right].val <= lists[minIndex].val) {
        minIndex = right;
    }
    if(minIndex != i) {
        //swap arrays
        let min = lists[minIndex];
        lists[minIndex] = lists[i];
        lists[i] = min;
        buildHeap(lists, minIndex);
    }
}