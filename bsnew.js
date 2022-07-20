class Node { 
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right  = right;
  }
}

class Bst{
  constructor() {
    this.root = null
  }

  add(data) {
    const node = this.root;
    if(node == null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if(data < node.data) {
          if(node.left == null) {
            node.left = new Node(data)
            return
          } else if(node.left !== null) {
            return searchTree(node.left)
          }
        } else if(data > node.data) {
          if(node.right == null) {
            node.right = new Node(data);
            return
          } else if(node.right !== null){
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  findMin() {
    let current = this.root;
    while(current.left) {
      current = current.left 
    }
    console.log(current.data+'this is minimum')
  }

  findMax() {
    let current = this.root;
    while(current.right) {
      current = current.right
    }
    console.log(current.data+'this is minimum')
  }


  isPresent(data) {
    let current = this.root;
    while(current) {
      if(data == current.data) {
        return true;
      }

      if(data < current.data) {
        current = current.left;
      }

      if(data > current.data) {
        current = current.right;
      }
    }
    return false;
  }

}


const bst1 = new Bst();
console.log(bst1)
bst1.add(4)
bst1.add(2)
bst1.add(9)
bst1.add(1)

bst1.findMin()
bst1.findMax()
console.log(bst1.isPresent(11))
console.log(bst1)