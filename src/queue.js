const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

class ListNode {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}


class Queue {

	constructor() {
		this.head = null;
		this.length = 0;
	}

  getUnderlyingList() {
    return this.head;
  }

  enqueue(data) {
		// если очередь пуста
		if (this.length === 0) {
			this.head = new ListNode(data);			
		// если не пуста - добавляем вконец + ссылку
		} else {
			let current = this.head;  // начало

			while(current.next) {  // ищем конец
        current = current.next;
      }
			current.next = new ListNode(data); // ссылка на созданнуб ноду в последнем эл-те
		}
		this.length++;
  }

  dequeue() {
    const current = this.head;  // 1-й
		const next = current.next;  // 2-й
		this.head = next;
		return current.value;
  }
}

module.exports = {
  Queue
};
