
/**
 * class Tree {
 *    constructor(val, left=null, right=null) {
 *        this.val = val;
 *        this.left = left;
 *        this.right = right;
 *    }
 * }
 */

function deleteNode(root, val) {
  if(root == null) {
    return null;
  }
  if(root.val == val) {
    //root is leaf
    if(!root.left && !root.right) {
      return null;
    }
    //if both left and right are available
    if(root.left && root.right) {
      //make root.right as new node
      //and point root.right's left to root.left
      let lastLeft = root.right;
      while(lastLeft.left!=null) {
        lastLeft = lastLeft.left;
      }
      lastLeft.left = root.left;
      return root.right;
    } else {
      //return either of the child which is not null
      return root.left || root.right;
    }

  } else if(root.val < val) {
    //traverse to right of root to delete the val
    root.right = deleteNode(root.right, val);
  } else {
    //traverse to left of root to delete the val
    root.left = deleteNode(root.left, val);
  }
  return root;
}

// //  
//     5
//   1   7    delete : 4

//   //  
//   5
// 1   7 
//       9
// 11   delete : 7


//         //  
//    4
// 1       7 
//      6     9   delete : 7
//          8   11