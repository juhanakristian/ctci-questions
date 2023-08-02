class MinStack {
  private minStack: number[];
  private stack: number[];

  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(value: number) {
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }

    this.stack.push(value);
  }

  pop() {
    const value = this.stack.pop();

    if (value === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return value;
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}

const s = new MinStack();
s.push(5);
s.push(6);
s.push(3);
s.push(3);

console.log(s.min());
s.pop();
console.log(s.min());
s.pop();
console.log(s.min());
s.pop();
console.log(s.min());
