class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  BFS() {
    let currentNode = this.root;
    let queue =[];
    let results = [];
    queue.push(currentNode);
    while(queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  DFSPRE() {
    let result = [];
    function traverse(currentNode) {
      result.push(currentNode.value);
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);

    }
    traverse(this.root);
    return result;
  }

  DFSPOSTORDER() {
    let result = [];
    function traverse(currentNode) {
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
      result.push(currentNode.value);
    }
    traverse(this.root);
    return result;
  }

  DFSINORDER() {
    let result = [];
    function traverse(currentNode) {
      if(currentNode.left) traverse(currentNode.left);
      result.push(currentNode.value);
      if(currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return result;
  }

  insert(value) {
    const newNode = new Node(value);
    if(this.root === null ) {
      this.root =newNode;
      return this;
    }
    let temp = this.root;
    while(true) {
      if(newNode.value === temp) return undefined;
      if(newNode.value < temp.value) {
        if(temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left
      } else {
        if(temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right
      }
    }
    
  }

  contains(value) {
    if(this.root == null) return false;
    let temp = this.root;
    while( temp ) {
      if(value < temp.value) {
        temp = temp.left;
      } else if(value > temp.value) {
        temp = temp.right
      } else {
        return this;
      }
    }
    return false
  }

  minimum() {
    if(this.root === null) return undefined;
    let temp = this.root;
    while(temp.left) {
      temp = temp.left;
    }
    return temp;
  }


}

const mytree = new BST();
mytree.insert(47)
mytree.insert(21)
mytree.insert(76)
mytree.insert(18)
mytree.insert(27)
mytree.insert(52)
mytree.insert(82)
// console.log(mytree.contains(76))
console.log(mytree.BFS())
console.log(mytree.DFSPRE())
console.log(mytree.DFSPOSTORDER())
console.log(mytree.DFSINORDER())