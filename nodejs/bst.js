//https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

class BST {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function insertNode(root, node) {
    if(root==null) {
        return node;
    } else if(node.data <= root.data) {
        root.left = insertNode(root.left, node);
    } else {
        root.right = insertNode(root.right, node);
    }
    return root;
}

function preOrder(root) {
    if(root==null) {
        return;
    }
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

function constructTree(arr) {
    let root = null;
    for(let val of arr) {
        val = parseInt(val);
        newNode = new BST(val);
        root = insertNode(root, newNode);
    }
    return root;
}

function getNode(root, data) {
    if(root==null) {
        return null;
    } else if(data < root.data) {
        return getNode(root.left, data);
    } else if (data > root.data) {
        return getNode(root.right, data);
    } else {
        return root;
    }
}



function main(input) {
    input = input.split("\n");
    let n = parseInt(input[0]);
    let arr = input[1].split(" ");
    let r = parseInt(input[2]);

    let root = constructTree(arr);

    root = getNode(root, r);
    preOrder(root);
}