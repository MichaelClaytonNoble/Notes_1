// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
      this.value = val;
      this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
  constructor(){
    this.top = null;
    this.bottom = null;

    this.length = 0;
  }
  push(val){
    const newNode = new Node(val); 
    if( top === null ){
      this.top = newNode;
      this.bottom = newNode;
      this.top.next = this.bottom;
    }
    else{
      newNode.next = this.top;
      this.top = newNode;
    }

    return ++this.length;
  }

  pop(){
    if( this.top === null ) { return null; }
    let removed = this.top.value;

    if( this.top.next === this.bottom ){
      this.top = null;
    }
    
    this.length -=1;
    return removed;
  }

  size(){
    return this.length;
  }
}

class StackQueue {
    // TODO: Implement the StackQueue class!

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
