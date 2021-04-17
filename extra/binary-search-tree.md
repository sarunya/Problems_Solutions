   [1,2,3,4]  --> linear structure continuous

  1  ->  2 -> 3-> null

             1
          2      3
        4

binary tree -> at the max 2 children per node
binary search tree ->   it is a binary tree, 
                        left node will always have lesser value than parent node 
                        right node will always have greater value than parent node  


//To group properties in single entity
class Car {
  constructor(type, make, seater, color) {
    this.type = type;
    this.make = make;
    this.seater = seater;
    this.color = color;
  }
}

Car car = new Car("baleno", "maruti", "5", "Blue");
console.log(car.color);


         ( 5 )   
        /     \
      (3)     (8) 
     /  \     /  \
   (1)  (4) (7)  (9)  (leaf)


class Node {
  construct(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
} 


Node : 

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insertChildNode(parentNode, node) {        
    if(node.val <= parentNode.val) {         //4<=5        
      if(parentNode.left==null) {                      
        parentNode.left = node;
        return;
      }
      this._insertChildNode(parentNode.left, node);     //=> (3, 4)
    } else {
      if(parentNode.right==null) {                      
        parentNode.right = node;
        return;
      }
      this._insertChildNode(parentNode.right, node);
    }
  }

  insertNode(value) {
    let node = new Node(value); //node value 1
    if(this.root==null) {
      this.root = node;
    }
    else {
      this._insertChildNode(this.root, node); (5, 1)
    }
  }
}

let bst = new BinarySearchTree();
bst.insertNode(5);       (5)
bst.insertNode(3);    (3)
bst.insertNode(1);       (4)



Deletion :

         ( 5 )   
        /     \
      (3)     (8) node1
     /  \     /  \
   (1)  (4) (7)  (9) 
                    (10) (leaf)



         ( 5 )              =>      (3)
        /     \                 (1)      (4)
      (3)     (8) node1
     /  \     /  \
   (1)  (4) (7)  (10) (leaf)


1. The node can be leaf
2. The node is parent of one of the child
3. The node is parent of both left and right child
4. There is no such node with the given value



         ( 5 )              
        /     \                
      (3)     (8) node1
     /  \     /  \
   (1)  (4) (7)  (10)
                    \
                (9)  (11)
                       (leaf)

  
delete(5, 10);

delete(5.right(8), 10);

delete(8.right(10), 10);
        10 == 1-
       
