class Node {
  constructor( value ) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor( value ) {
    const newNode = new Node( value );
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  
  //push new value to linkedlist
  push(value) {
    const newNode = new Node(value);
    if(!this.head) { // zero element
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this
  }

  pop() {
    let temp = this.head;
    let pre = this.head;
    if(!this.head) return undefined;
    while(temp.next) {
      pre = temp;
      temp = temp.next
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this
  }

  // Unshift inserting node from starting
  unshift(value) {
    let newNode = new Node(value)
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //shift deleting the first node.
  shift() {
    if(!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp
  }

  //getting value using index
  get(index) {
    if(index<0 || index >= this.length) {
      return undefined;
    }
      let temp = this.head;
      for( let a=0;a<index;a++) {
        temp = temp.next
      }
      return temp; 
  }

  set(value,index) {
    let temp = this.get(index);
    if(temp) {
      temp.value = value;
      return true
    }
    return false;
  }

  insert(value,index) {
    if(index === 0 ) return this.unshift(value);
    if(index === this.length ) return this.push(value);
    if(index < 0 || index > this.length) return false;
    
    const temp = this.get(index);
    const newNode = new Node(value);
    newnode.next = temp.next;
    temp.next = newnode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index ===0) return this.shift();
    if(index === this.length-1) return this.pop();
    if(index< 0 || index >= this.length) return undefined;

    let before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    this.length--
    return temp;

  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for(let i=0;i<this.length;i++) {
      next = temp.next;
      temp.next = prev
      prev = temp.next
      temp = next
    }
    return this
  }

 }

// How to create a new instance of linkedinlist object.

let myLinkedList = new LinkedList(4);

console.log (myLinkedList.push(5));
console.log (myLinkedList.push(6));
console.log (myLinkedList.push(82));

// console.log(myLinkedList.unshift(7));
// console.log(myLinkedList.insert(500,0))
console.log(myLinkedList.reverse())
// console.log(myLinkedList.shift())
// console.log(myLinkedList.get(0))
// console.log(myLinkedList.set(0,1))
// console.log(myLinkedList.pop())
// myLinkedList.pop()
// console.log(myLinkedList)
