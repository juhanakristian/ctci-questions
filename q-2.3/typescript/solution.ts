
type ListNode = {
  value: unknown;
  next: ListNode | null;
};

// Copy the next node's value into the current node
function deleteNode(node: ListNode): void {
  if (!node.next) return;
  node.value = node.next.value;
  node.next = node.next.next;
}


function appendNode(previous: ListNode, value: unknown): ListNode {
  const node: ListNode = { value, next: null };
  if (previous.next) {
    node.next = previous.next;
  }

  previous.next = node;

  return node;
}

function printList(list: ListNode): void {
  let node: ListNode | null = list;
  while (node) {
    console.log(`node ${node.value}`)
    node = node.next;
  }
}

const list: ListNode = { value: 1, next: null };

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
