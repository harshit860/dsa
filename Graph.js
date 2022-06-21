class Graph{
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true
    }
    return false
  }

  addEdge(vertex1,vertex2) {
    if(this.adjacencyList[vertex1] &&this.adjacencyList[vertex2] ) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return true;
    }
    return false;
  }

  removeEdge(vertex1,vertex2) {
    if(this.adjacencyList[vertex1] &&this.adjacencyList[vertex2] ) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
      return true;
  }
  return false;
  }

  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) return undefined;
    while(this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex,temp)
    }
    delete this.adjacencyList[vertex]
  }


}

const graph1 = new Graph();
console.log(graph1.addVertex(1))
console.log(graph1.addVertex(2))
console.log(graph1.addVertex(3))
console.log(graph1.addEdge(1,2))
console.log(graph1.addEdge(1,3))
console.log(graph1.addEdge(2,3))
console.log(graph1)
console.log(graph1.removeVertex(3))
console.log(graph1)