struct MinStack {
    stack: Vec<u8>,
    min_stack: Vec<u8>,
}

impl MinStack {
    fn new() -> Self {
        MinStack {
            stack: Vec::new(),
            min_stack: Vec::new(),
        }
    }

    fn push(&mut self, elem: u8) {
        self.stack.push(elem);

        if self.min_stack.is_empty() {
            self.min_stack.push(elem);
        } else {
            let min = *self.min_stack.last().unwrap();
            if elem < min {
                self.min_stack.push(elem);
            }
        }
    }

    fn pop(&mut self) {
        let elem = self.stack.pop().unwrap();

        if elem == *self.min_stack.last().unwrap() {
            self.min_stack.pop();
        }
    }

    fn min(&self) -> Option<u8> {
        self.min_stack.last().map(|x| *x)
    }
}

fn main() {
    let mut stack = MinStack::new();

    stack.push(5);
    stack.push(6);
    stack.push(3);
    stack.push(7);
    stack.push(2);
    stack.push(1);

    assert_eq!(stack.min(), Some(1));

    stack.pop();
    stack.pop();
    assert_eq!(stack.min(), Some(3));
}
