//binary tree data structure in javascript
const Node=require('./node')

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    add(data){
        const node=this.root;
        if(node===null){
            this.root=new Node(data)
            return;
            }else{
            //recursive function that places node
            const searchTree=function(node){
                if (data<node.data){
                    if(node.left===null){
                        node.left= new Node(data);
                        return;
                        //continues left if data<node.data and there is a left node
                    }else if (node.left!==null){
                        return searchTree(node.left);
                    }
                    //if data>node.data, places right node
            }else if(data>node.data){
                if (node.right==null){
                    node.right=new Node(data);
                    return;
                }else if(node.right!==null){
                    return searchTree(node.right);
                }
                }else{
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin(){
        let current=this.root;
        while (current.left!==null){
            current=current.left;
        }
        return current.data;
    }
    findMax(){
        let current =this.root;
        while (current.right!==null){
            current=current.right;
        }
        return current.data;
    }
    find(data){
        let current =this.root;
        while (current.data!==data){
            if(data<current.data){
                current=current.left;
            }else{
                current=current.right;
            }
            if (current===null){
                return null;
            }
        }
        return current;
    }
    isPresent(data){
        let current =this.root;
        while (current){
            if (data===current.data){
                return true;
            }
            if (data<current.data){
                current=current.left;
            }else{
                current=current.right;
            }
        }
        return false;
    }
    remove(data){
        //node is root node
        const removeNode=function(node,data){
            if (node===null){
                return null;
            }
            if (data==node.data){
                //node has no children
                if (node.left ==null && node.right==null){
                    return null;
                }
                //node has no left children
                if (node.left==null){
                    return node.right;
                }
                //node has no right children
                if (node.right==null){
                    return node.left
                }
                //node has 2 children
                var tempNode=node.right;
                while (tempNode.left!==null){
                    tempNode==tempNode.left;
                }
                node.data=tempNode.data;
                node.right=removeNode(node.right,tempNode.data);
                return node;
            }   else if(data<node.data){
                node.left=removeNode(node.left,data);
                return node; 
            }   else{
                node.right=removeNode(node.right,data);
                return node;
            }
        }
        this.root=removeNode(this.root,data);
    }
    isBalanced(){
        return (this.findMinHeight()>=this.findMaxHeight()-1)
    }

    reBalance(){
        const inorderList=this.inOrder();
        this.root=this.add(inorderList);
    }

    prettyPrint(node=this.root , prefix="",isLeft=true){
        if (node.right){
            this.prettyPrint(node.right, `${prefix}${isLeft ? '|   ':'    '}`,false)
        }
        console.log(`${prefix}${isLeft  ? '└── ' : '┌── '}${node.value}`);
        if (node.left){
            this.prettyPrint(node.left,`${prefix}${isleft ?'       ': '|    '}`,true)
        }
    }

    findMinHeight(node=this.root){
        if(node==null){
            return -1;
        };
        let left=this.findMinHeight(node.left);
        let right=this.findMinHeight(node.right);
        if (left<right){
            return left+1;
        }else{
            return right +1;
        }
    }
    findMaxHeight(node=this.root){
        if (node==null){
            return -1;
        };
        let left=this.findMaxHeight(node.left);
        let right=this.findMaxHeight(node.right);
        if (left>right){
            return left+1;
        }else{
            return right+1;
        }
    }
    inOrder(){
        if(this.root==null){
            return null;
        }else{
            var result=new Array();
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root)
            return result;
        }
    }
    preOrder(){
        if (this.root==null){
            return null;
        }else{
            var result=new Array();
            function traversePreOrder(node){
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right)
            }
            traversePreOrder(this.root)
            return result;
        }
    }
    postOrder(){
        if (this.root==null){
            return null;
        }else{
            var result=new Array();
            function traversePostOrder(node){
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }

}


module.exports = BinarySearchTree

