class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size, this.print();
    }

    pop(){
        if(!this.first) return null;
        let removed = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return this.print();
    }

    print(){
       let arr = [];
       let curr = this.first;
       while(curr){
           arr.push(curr.val);
           curr = curr.next;
       } 
       console.log(arr);
       return true;
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
