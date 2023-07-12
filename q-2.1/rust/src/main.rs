use std::collections::HashSet;

#[derive(Debug)]
struct Node {
    value: i32,
    next: Option<Box<Node>>,
}

fn dedupe(head: &mut Option<Box<Node>>) {
    let values = &mut HashSet::new();
    let mut current = head;
    loop {
        match current {
            // Some(node) if values.contains(&node.value) => {
            //     node.next = node.next.take();
            // }
            Some(node)  => {
                // If the next node (node.next.value) is a duplicate, skip it
                if let Some(next) = &node.next {
                    if values.contains(&next.value) {
                        node.next = node.next.take().unwrap().next;
                        continue;
                    }
                }

                values.insert(node.value);
                current = &mut node.next;
            }
            None => break,
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
    asd
}


