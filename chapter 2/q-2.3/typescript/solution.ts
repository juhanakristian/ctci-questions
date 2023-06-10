type ListNode = {
  value: unknown;
  next: ListNode | null;
  previous: ListNode | null;
};

// Copy the next node's value into the current node}j
function deleteNode(node: ListNode): void {

}

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

function appendNode(previous: ListNode, value: unknown): ListNode {
  const node: ListNode = { value, next: null, previous };
  if (previous.next) {
    const next = { ...previous.next };
    node.next = next;
  }

  previous.next = node;

  return node;
}

const list: ListNode = { value: 1, next: null, previous: null };

appendNode(list, 2);
appendNode(list, 3);
appendNode(list, 4);
appendNode(list, 5);
appendNode(list, 6);
console.log(list)
// console.log(result);
// const result = kthLast(list, 0);
