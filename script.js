const BinaryTree=require('./js_binarytree')

const bst=new BinaryTree();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())
bst.add(10)
console.log(bst.findMaxHeight())
console.log(bst.findMinHeight())
console.log(bst.isBalanced())
console.log('inorder: '+bst.inOrder())
console.log('postorder: '+bst.postOrder())
console.log('preorder: '+bst.preOrder())




