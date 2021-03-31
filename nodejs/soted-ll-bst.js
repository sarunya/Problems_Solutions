//https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 let root = null;
 let sortedList = [];
var sortedListToBST = function(head) {
 sortedList = [];
 root = null;
 _convertToArray(head);
 console.log(sortedList);
 return _convertArrayToTree(sortedList, 0, sortedList.length-1, root);
};

var _convertArrayToTree = function(arr, l, r, root) {
     //console.log(l,r, Math.floor((l+r)/2));
 if(l<=r) {
     let mid = Math.floor((l+r)/2);
     let node = new TreeNode(arr[mid]);
     root = node;
     root.left = _convertArrayToTree(arr, l, mid-1);
     root.right = _convertArrayToTree(arr, mid+1, r);
     return root;
 }
 return null;
}

var _convertToArray = function (head) {
 while(head!=null) {
     sortedList.push(head.val);
     head = head.next;
 }
}