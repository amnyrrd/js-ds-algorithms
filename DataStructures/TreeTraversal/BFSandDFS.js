class Node {
    constructor(val){
        this.val = val
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this
        } 
        let curr = this.root;
        while(true){
            if(val === curr.val) return undefined;
            if(val < curr.val){
                if(curr.left === null){
                    curr.left = newNode
                    return this;
                } 
                curr = curr.left;
            } else {
                if(curr.right === null){
                    curr.right = newNode;
                    return this;
                } 
                curr = curr.right
            }
        }
    }

    find(val){
        if(this.root === null) return false;
        let curr = this.root, found = false;
        while(curr && !found){
            if(val < curr.val){
                curr = curr.left;
            } else if(val > curr.val){
                curr = curr.right;
            } else {
                found = true
            }
        }
        if(!found) return undefined;
        return curr;
    }

    includes(val){
        if(this.root === null) return false;
        let curr = this.root, found = false;
        while(curr && !found){
            if(val < curr.val){
                curr = curr.left
            } else if (val > curr.val){
                curr = curr.right
            } else {
                return true
            }
        }
        return false;
    }

    breadthFirstSearch(){
        let data = [], queue = [], node = this.root;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    depthFirstSearchPreOrder(){
        let data = [], current = this.root;
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    depthFirstSearchPostOrder(){
        let data = [], current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val)
        }
        traverse(current);
        return data;
    }

    depthFirstSearchInOrder(){
        let data = [], current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

}

let tree = new BinarySearchTree();
tree.insert(23)
tree.insert(2)
tree.insert(13)
tree.insert(9)
tree.insert(6)
tree.insert(12)
tree.insert(34)
tree.insert(29)
tree.insert(666)