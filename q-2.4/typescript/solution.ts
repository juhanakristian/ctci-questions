
type ListNode = {
  value: number;
  next: ListNode | null;
};

function partition(list: ListNode, value: number): ListNode {
  // Keep track of previous node so we can "delete" the last node
  let current: ListNode | null = list;
  let next: ListNode | null = list.next;
  let head: ListNode | null = list;

  while (next) {
    if (next.value < value) {
      // move to head
      head = prependNode(head, next.value);
      if (next.next != null) {
        next.value = next.next.value;
        next.next = next.next.next;
      } else {
        current.next = null;
      }

    }

    current = next;
    next = next.next;
  }

  return head;
}


function prependNode(next: ListNode, value: number) {
  const node: ListNode = { value, next };
  return node;
}

function appendNode(previous: ListNode, value: number): ListNode {
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
const node4 = appendNode(list, 2);
const node5 = appendNode(list, 5);
appendNode(list, 6);
printList(list);
const parititonValue = 3;
console.log(`Partition list with ${parititonValue}`);
const head = partition(list, parititonValue);
printList(head);
