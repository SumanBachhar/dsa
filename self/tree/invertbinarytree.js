const root = [4, 2, 7, 1, 3, 6, 9];
const invertTree = (root) => {
  if (root == null) {
    return root;
  }
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
console.log(invertTree(root));
