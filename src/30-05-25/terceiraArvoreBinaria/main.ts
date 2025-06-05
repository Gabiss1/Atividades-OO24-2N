interface BstNodeInterface {
  value: number;
  left: BstNodeInterface | null;
  right:BstNodeInterface | null;
}

class BstNode implements BstNodeInterface {
  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  value: number;
  left: BstNodeInterface | null;
  right: BstNodeInterface | null;
}

class BST {
  root: BstNode | null;

  constructor() {
    this.root = null;
  }
  
  insert(value: number) {
    let newNode = new BstNode(value);
    // If root empty, set new node as the root
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root: BstNode, newNode: BstNode) {
    if (newNode.value < root.value) {
      // If no left child, then just insesrt to the left
      if (root.left === null) {
        root.left = newNode;
        return;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      // If no right child, then just insesrt to the right
      if (root.right === null) {
        root.right = newNode;
        return;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(value: number): boolean | string {
    if (!this.root) {
      return "Tree is empty";
    } else {
      return this.searchNode(this.root, value)
    }
  }

  searchNode(root: BstNode, value: number): boolean {
    if (!root) {
      return false;
    }

    if (value < root.value) {
      if (root.left === null) {
        return false;
      }
      return this.searchNode(root.left, value);
    } else if (value > root.value) {
      if (root.right === null) {
        return false;
      }
      return this.searchNode(root.right, value);
    }

    // value === root.value
    return true;
  }

  remove(value: number): void {
    if (!this.root) {
      return;
    } else {
      this.removeNode(this.root, value);
    }
  }
  
  removeNode(root: BstNode, value: number): null | BstNode {
    // If value is less than root value, go to the left subtree
    if (value < root.value && root.left !== null) {
      root.left = this.removeNode(root.left, value);
      return root;
      // If value is greater than root value, go to the right subtree
    } else if (value > root.value && root.right !== null) {
      root.right = this.removeNode(root.right, value);
      return root;
      // If we found the value, remove the node
    } else {
      // If no child nodes, just remove the node
      if (!root.left && !root.right) {
        return null;
      }
      // If one child (left)
      if (root.left) {
        root = root.left;
        return root;
        // If one child (right)
      } else if (root.right) {
        root = root.right;
        return root;
      }
      // If two child nodes (both)
      // Get the minimum of the right subtree to ensure we have valid replacement
      let minRight = this.findMinNode(root.right!);
      root.value = minRight.value;
      // Make sure we remove the node that we replaced the deleted node
      root.right = this.removeNode(root.right!, minRight.value);
      return root;
    }
  }
  
  findMinNode(root: BstNode): BstNode {
    if (!root.left) {
      return root
    } else {
      return this.findMinNode(root.left)
    }
  }
}

//　for checking result
const inputs: [string, number?][] = [
  ["insert", 8],
  ["find", 8],
  ["insert", 2],
  ["insert", 3],
  ["insert", 7],
  ["insert", 22],
  ["insert", 1],
  ["find", 1],
  ["find", 2],
  ["find", 3],
  ["find", 4],
  ["find", 5],
  ["find", 6],
  ["find", 7],
  ["find", 8],
  ["print"],
  ["delete", 3],
  ["delete", 7],
  ["print"]
];
const bst = new BST();

inputs.forEach(input => {
  const type = input[0];
  const num  = input[1] as number;

  if (type === "insert") {
    bst.insert(num);
  } else if (type === "delete") {
    bst.remove(num);
  } else if (type === "find") {
    if (bst.search(num)) {
      console.log("yes");
    } else {
      console.log("no");
    }
  } else if (type === "print") {
    console.log("----------- in order -----------");
    inOrder(bst.root!);

    console.log("----------- pre order -----------");
    preOrder(bst.root!);
  }
});


function preOrder(root: BstNode): void {
  console.log(root.value);
  if (root.left) {
    preOrder(root.left);
  }
  if (root.right) {
    preOrder(root.right);
  }
}

function inOrder(root: BstNode): void {
  if (root.left) {
    inOrder(root.left);
  }
  console.log(root.value);
  if (root.right) {
    inOrder(root.right);
  }
}
