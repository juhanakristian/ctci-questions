class StackQueue<T> {
  private in: T[];
  private out: T[];

  constructor() {
    this.in = [];
    this.out = [];
  }

  push(value: T): StackQueue<T> {
    this.in.push(value);
    this.out = [value, ...this.out];

    return this;
  }

  pop(): StackQueue<T> {
    this.out.pop();
    this.in.shift();
    return this;
  }

  print() {
    console.log(this.in);
  }
}

const s = new StackQueue<number>();
s.push(1).push(2).push(3).push(4);
s.print();
s.pop().pop();
s.print();
s.push(1).push(2).push(3).push(4);
s.print();
