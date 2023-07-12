use std::collections::HashSet;

#[derive(Debug)]
struct Node {
    value: i32,
    next: Option<Box<Node>>,
}

/**
 * Return k-kth last element from a linked list
 */
fn kth_last(head: Option<Box<Node>>, k: u8) -> i32 {
    let mut current = &head;
    let mut kth_last = &head;
    let mut index = 0;
    // To the end of the list and update kth_last
    loop {
        match current {
            None => break,
            Some(node) => {
                match kth_last {
                    Some(kl) => {
                        if index >= k {
                            kth_last = &kl.next;
                        }
                    }
                    None => (),
                }

                index += 1;
                current = &node.next;
            }
        }
    }

    kth_last.as_ref().unwrap().value
}

fn main() {
    let head = Some(Box::new(Node {
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
    let result = kth_last(head, 3);
    println!("{:?}", result);
}
