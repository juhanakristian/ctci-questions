type ListNode = {
  value: unknown;
  next: ListNode | null;
};

function kthLast(head: ListNode, k: number): ListNode | null {
  let node: ListNode | null = head;
  let kth: ListNode | null = null;
  // Iterate through the list and keep track of the kth last node
  // and break when we reach the end of the list
  while (node) {
    // When k is 0, we can start storing the kth last node
    if (k === 0 && !kth) {
      kth = head;
    } else if (kth) {
      // On subsequent iterations, we can move the kth last node forward
      kth = kth.next;
    }

    // Move the node forward
    node = node.next;
    k--;
  }

  return kth;
}

const list = { value: 1, next: { value: 2, next: { value: 1, next: null } } };
const result = kthLast(list, 0);
console.log(result);
