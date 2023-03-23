//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) return;
    const node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node.value;
  }
  unshift(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }
  shift() {
    if (this.length === 0) return;
    const node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node.value;
  }
  delete(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        if (node === this.head) {
          this.head = node.next;
          if (this.head !== null) this.head.prev = null;
          if (node === this.tail) this.tail = null;
        } else if (node === this.tail) {
          this.tail = node.prev;
          if (this.tail !== null) this.tail.next = null;
        } else {
          node.prev.next = node.next;
          node.next.prev = node.prev;
        }
        this.length--;
        break;
      }
      node = node.next;
    }
  }
  count() {
    return this.length;
  }
}
