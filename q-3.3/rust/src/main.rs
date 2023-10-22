use std::fmt::Display;

struct SetOfStacks<T>
where
    T: Display,
{
    stack: Vec<Vec<T>>,
    threshold: usize,
}

impl<T> SetOfStacks<T>
where
    T: Display,
{
    fn new(threshold: usize) -> Self {
        SetOfStacks {
            stack: Vec::new(),
            threshold: threshold,
        }
    }

    fn push(&mut self, elem: T) {
        if self.stack.is_empty() {
            self.stack.push(Vec::new());
        }

        let last = self.stack.last_mut().unwrap();
        if last.len() == self.threshold {
            self.stack.push(Vec::new());
        }

        let last = self.stack.last_mut().unwrap();
        last.push(elem);
    }

    fn pop(&mut self) {
        let last = self.stack.last_mut().unwrap();
        last.pop();

        if last.is_empty() {
            self.stack.pop();
        }
    }

    fn pop_at(&mut self, index: usize) -> Option<T> {
        if index >= self.stack.len() {
            return None;
        }

        let stack = &mut self.stack[index];
        let elem = stack.pop();

        // Get all elements from stacks index + 1 to the end
        // by flattening them into a single vector
        let mut rest = self.stack.drain(index + 1..).flatten().collect::<Vec<_>>();

        // Redistribute the elements into stacks at max size of threshold
        while !rest.is_empty() {
            let last = self.stack.last_mut().unwrap();
            if last.len() == self.threshold {
                self.stack.push(Vec::new());
            }

            let last = self.stack.last_mut().unwrap();
            last.push(rest.pop().unwrap());
        }

        elem
    }

    fn print(&self) {
        for n in self.stack.iter() {
            for i in n {
                print!("{},", i)
            }
            println!()
        }
    }
}

fn main() {
    let mut stack = SetOfStacks::new(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.print();
    stack.pop_at(0);
    stack.print();
}
