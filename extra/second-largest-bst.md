         ( 5 )
        /     \
      (3)     (8)
     /  \     /  \
   (1)  (4) (7)  (10)   -> rightmost child
               (9) --> second largest



1. rightmost child is a leaf, then second largest is the parent node
2. rightmost child is not a leaf, 
        a. if there is no right child for left subtree, then left child itself
        b. if there is right child for left subtree, then rightmost child of left subtree.


function isLeaf(node) {
  return (node.left == null && node.right == null);
}

function getSecondLargest(root) {
  //if root.right is leaf --> condition 1
  if(root.right && isLeaf(root.right)) {
    return root;
  } else if(root.right) {
    return getSecondLargest(root.right);
  }
  else {
    if(root.left && root.left.right==null) {
      return root.left;
    } else {
      return getSecondLargest(root.left);
    }
  }
}
