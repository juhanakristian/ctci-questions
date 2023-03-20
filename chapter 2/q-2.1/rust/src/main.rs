use std::collections::HashSet;

#[derive(Debug)]
struct Node {
    value: i32,
    next: Option<Box<Node>>,
}

fn dedupe(head: &mut Option<Box<Node>>) {
    let values = &mut HashSet::new();
    let mut current = head;
    while let Some(node) = current {
        let next = &mut node.next;
        match next {
            Some(next) => {
                if values.contains(&next.value) {
                    print!("{} ", node.value);
                    *current.next = next.take();
                } else {
                    values.insert(node.value);
                    current = next;
                }
            }
            None => {
                if values.contains(&node.value) {
                    print!("{} ", node.value);
                    *current = None;
                } else {
                    values.insert(node.value);
                    current = next;
                }
            }
        }
    }
}

fn main() {
    let mut head = Some(Box::new(Node {
        value: 1,
        next: Some(Box::new(Node {
            value: 2,
            next: Some(Box::new(Node {
                value: 3,
                next: Some(Box::new(Node {
                    value: 2,
                    next: Some(Box::new(Node {
                        value: 1,
                        next: None,
                    })),
                })),
            })),
        })),
    }));
    dedupe(&mut head);
    println!("{:?}", head);
}
