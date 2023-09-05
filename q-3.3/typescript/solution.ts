class SetOfStacks {
  private stacks: number[][] = [[]];
  private threshold: number = 3;

  constructor(stackThreshold: number) {
    this.threshold = stackThreshold;
  }

  push(value: number): SetOfStacks {
    const stack = this.stacks[this.stacks.length - 1];
    if (stack.length === this.threshold) {
      this.stacks.push([]);
    }

    this.stacks[this.stacks.length - 1].push(value);

    console.log(`stacks: ${JSON.stringify(this.stacks)}`);

    return this;
  }

  pop(): SetOfStacks {
    const stack = this.stacks[this.stacks.length - 1];
    const value = stack.pop();

    if (stack.length === 0) {
      this.stacks.pop();
    }

    console.log(`stacks: ${JSON.stringify(this.stacks)}`);
    return this;
  }
}

const s = new SetOfStacks(3);
s.push(1).push(2).push(3).push(4);
s.pop().pop();
