const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (!this.list) this.list = node;
    else {
      let current = this.list;
      while(current.next) current = current.next;
      current.next = node;
    }
  }

  dequeue() {
    if (!this.list) null;
    else {
      let current = this.list;
      this.list = current.next;
      return current.value;
    }
  }
}
