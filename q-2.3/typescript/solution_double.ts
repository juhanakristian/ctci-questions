type ListNode = {
  value: unknown;
  next: ListNode | null;
  previous: ListNode | null;
};

// Copy the next node's value into the current node}j
function deleteNode(node: ListNode): void {
  if (!node.previous || !node.next) return;
  node.previous.next = node.next;
  node.next.previous = node.previous;
}


function appendNode(previous: ListNode, value: unknown): ListNode {
  const node: ListNode = { value, next: null, previous: null };
  if (previous.next) {
    node.next = previous.next;
    node.next.previous = node;
  }

  previous.next = node;
  node.previous = previous;

  return node;
}

function printList(list: ListNode): void {
  let node: ListNode | null = list;
  while (node) {
    console.log(`node ${node.value}`)
    node = node.next;
  }
}

const list: ListNode = { value: 1, next: null, previous: null };

const node2 = appendNode(list, 2);
const node3 = appendNode(list, 3);
const node4 = appendNode(list, 4);
const node5 = appendNode(list, 5);
appendNode(list, 6);
printList(list);
console.log("Deleting node with value " + node3.value);
deleteNode(node3);
printList(list);
// console.log(result);
// const result = kthLast(list, 0);
