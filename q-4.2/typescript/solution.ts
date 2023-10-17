type BinaryTreeNode<T> = {
  value: T;
  left?: BinaryTreeNode<T> | null;
  right?: BinaryTreeNode<T> | null;
};

function BinaryTree<T>(values: T[]): BinaryTreeNode<T> | null {
  if (values.length === 0) return null;
  if (values.length === 1) return { value: values[0] };

  const middle = Math.floor(values.length / 2);
  const left = values.slice(0, middle);
  const right = values.slice(middle + 1);

  let root = {
    value: values[middle],
    left: BinaryTree(left),
    right: BinaryTree(right),
  };

  return root;
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tree = BinaryTree(values);

console.log(tree);
