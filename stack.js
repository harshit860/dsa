class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.length = 1
  }

  push(value) {
    const node = new Node(value);
    if(this.length == 0) {
      this.top = node;

    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length === 0) return undefined;
    let temp = this.top;
    this.top  = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}