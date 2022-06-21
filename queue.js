// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.first = newNode;
//     this.last = newNode;
//     this.length = 1;
//   }

//   enqueue(value) {
//     const node = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = node;
//       this.last = node
//     }
//     this.length++
//     return this;
//   }
//   dequeue() {
//     if (this.length === 0) return undefined;
//     let temp = this.first;
//     if (this.length == 1) {
//       this.first = null;
//       this.last = null
//     } else {
//       temp = this.first;
//       this.first = this.first.next;
//       temp.next = null;
//     }
//     this.length--;
//     return {
//       'node dequeue': temp,
//       'queue': this
//     }
//   }
// }

// const newQueue = new Queue(2);
// console.log(newQueue.enqueue(3));
// console.log(newQueue.dequeue())

function Binary(sary,key) {
  let start = 0;
  let end = sary.length-1;
  while(start<end) {
    let mid = Math.floor((start+end)/2);
    if(sary[mid] === key) {
      console.log(key,'mil')
      return key
    } else if(sary[mid] < key) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}

Binary([1,4,6,10],4)