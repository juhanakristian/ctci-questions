/**
 * Naive implementation of a stack with three stacks in one array
 */

class TripleStack {
  private s1: number;
  private s2: number;
  private s3: number;

  private stack: number[];

  constructor() {
    this.s1 = 0;
    this.s2 = 0;
    this.s3 = 0;
    this.stack = [];
  }

  private getStack(stackNum: number) {
    switch (stackNum) {
      case 1:
        return this.stack.slice(0, this.s1);
      case 2:
        return this.stack.slice(this.s1, this.s1 + this.s2);
      case 3:
        return this.stack.slice(this.s1 + this.s2, this.s1 + this.s2 + this.s3);
      default:
        return [];
    }
  }

  push(value: number, stackNum: number) {
    const first = this.getStack(1);
    const second = this.getStack(2);
    const third = this.getStack(3);

    switch (stackNum) {
      case 1:
        this.s1++;
        first.push(value);
      case 2:
        this.s2++;
        second.push(value);
      case 3:
        this.s3++;
        third.push(value);
      default:
        break;
    }

    this.stack = first.concat(second).concat(third);
  }

  pop(stackNum: number) {
    const first = this.getStack(1);
    const second = this.getStack(2);
    const third = this.getStack(3);

    switch (stackNum) {
      case 1:
        this.s1--;
        first.pop();
      case 2:
        this.s2--;
        second.pop();
      case 3:
        this.s3--;
        third.pop();
      default:
        break;
    }

    this.stack = first.concat(second).concat(third);
  }
}

const stack = new TripleStack();
stack.push(1, 1);
stack.push(2, 1);
stack.push(3, 1);
stack.push(4, 2);
stack.push(5, 2);
stack.push(6, 2);
stack.push(7, 3);
stack.push(8, 3);
stack.push(9, 3);
console.log(stack);
