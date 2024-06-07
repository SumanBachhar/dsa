const root = [4, 2, 7, 1, 3, 6, 9];
const invertTree = (root) => {
  let queue = [root];

  while (queue.length) {
    let n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  console.log(root);
};
invertTree(root);
