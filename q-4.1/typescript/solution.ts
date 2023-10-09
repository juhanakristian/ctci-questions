type GraphNode<T> = {
  value: T;
  adjacent: GraphNode<T>[];
};

function routeBetweenNodes<T>(
  start: GraphNode<T>,
  end: GraphNode<T>,
  visited: GraphNode<T>[] = []
): boolean {
  if (start === end) return true;

  visited.push(start);

  for (const node of start.adjacent) {
    if (!visited.includes(node) && routeBetweenNodes(node, end, visited)) {
      return true;
    }
  }

  return false;
}

const a: GraphNode<number> = { value: 1, adjacent: [] };
const b: GraphNode<number> = { value: 2, adjacent: [] };
const c: GraphNode<number> = { value: 3, adjacent: [] };
const d: GraphNode<number> = { value: 4, adjacent: [] };
const e: GraphNode<number> = { value: 5, adjacent: [] };
const f: GraphNode<number> = { value: 6, adjacent: [] };
const g: GraphNode<number> = { value: 7, adjacent: [] };

a.adjacent = [b, c];
b.adjacent = [d, e];
c.adjacent = [f, g];

console.log(routeBetweenNodes(a, g));
console.log(routeBetweenNodes(b, g));
console.log(routeBetweenNodes(b, c));
