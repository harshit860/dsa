class Node {
  constructor(val) {
    this.data = val;
  	this.next = null
  }
}

class LinkedList {
	constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length++
  }
  
  push(value) {
    	const newNode = new Node(value);
    	if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next =  newNode;
        this.tail = newNode;
      }
    this.length += 1;
  }
  
  push_at_front(value) {
    const newNode = new Node(value);
    if(this.head) {
      newNode.next = this.head;
    	this.head = newNode;
    }
  }
  
  push_after_node(valueToCheck,valueToInsert) {
    const newNode = new Node(valueToInsert);
    let numnext = this.head;
    while(numnext!= null) {
      let temp = numnext.next
      if(numnext.data == valueToCheck) {
				numnext.next = newNode;
        newNode.next = temp
      }
			numnext = numnext.next
    }
  }
  
  push_at_end(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }
  
  
  print() {
 
    let head = this.head;
    let result = []
    let length = 0
    while(head){
      	result.push(head.data)
      	head = head.next
      length = length + 1
    }
    return {'data':result,'length':length};
  }
  
  remove(key) {
    	let prev = null;
    	let num = this.head;
    while(num) {
      if(num.data === key) {
        prev.next = num.next;
        num.next = null;
      }
      prev = this.head;
      num = num.next
    }
    }
  
  
  
}

const ll = new LinkedList(4);

ll.push(2)
ll.push(8)
ll.push(7)
ll.push_at_end(9)
 ll.push_after_node(8,10)
ll.remove(2)
ll.print()

