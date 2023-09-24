struct TripleStack<T> {
    stack: Vec<T>,
    s1: usize,
    s2: usize,
    s3: usize,
}
impl<T> TripleStack<T> {
    fn new() -> Self {
        TripleStack {
            stack: Vec::new(),
            s1: 0,
            s2: 0,
            s3: 0,
        }
    }

    fn push(&mut self, stack: usize, elem: T) {
        match stack {
            1 => {
                self.stack.insert(self.s1, elem);
                self.s1 += 1;
            }
            2 => {
                self.stack.insert(self.s2, elem);
                self.s2 += 1;
            }
            3 => {
                self.stack.insert(self.s3, elem);
                self.s3 += 1;
            }
            _ => panic!("Invalid stack number"),
        }
    }

    fn pop(&mut self, stack: usize) -> Option<T> {
        match stack {
            1 => {
                if self.s1 == 0 {
                    None
                } else {
                    self.s1 -= 1;
                    Some(self.stack.remove(self.s1))
                }
            }
            2 => {
                if self.s2 == 0 {
                    None
                } else {
                    self.s2 -= 1;
                    Some(self.stack.remove(self.s2))
                }
            }
            3 => {
                if self.s3 == 0 {
                    None
                } else {
                    self.s3 -= 1;
                    Some(self.stack.remove(self.s3))
                }
            }
            _ => panic!("Invalid stack number"),
        }
    }

    fn peek(&self, stack: usize) -> Option<&T> {
        match stack {
            1 => self.stack.get(self.s1 - 1),
            2 => self.stack.get(self.s2 - 1),
            3 => self.stack.get(self.s3 - 1),
            _ => panic!("Invalid stack number"),
        }
    }
}
fn main() {
    let mut ts = TripleStack::new();

    ts.push(1, 1);
    println!("{:?}", ts.peek(1));
    ts.push(1, 2);
    println!("{:?}", ts.peek(1));
    ts.push(1, 3);
    println!("{:?}", ts.peek(1));
    ts.pop(1);
    println!("{:?}", ts.peek(1));
    ts.push(2, 1);
    println!("{:?}", ts.peek(2));
}
