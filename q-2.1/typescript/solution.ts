type ListNode = {
  value: unknown;
  next: ListNode | null;
};

function dedupe(head: ListNode): ListNode {
  let node = head;
  let next = node.next;
  const values = new Set([node.value]);
  while (next) {
    if (values.has(next.value)) {
      node.next = next.next;
      next = node.next;
    } else {
      values.add(next.value);
      node = next;
      next = node.next;
    }
  }

  return head;
}

const list = { value: 1, next: { value: 2, next: { value: 1, next: null } } };
const result = dedupe(list);
console.log(result);
