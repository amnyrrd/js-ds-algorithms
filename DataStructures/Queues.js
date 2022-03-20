class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return this.print(), ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        var removed = this.first;
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--;
        return this.print(), removed.val;
    }

    print(){
        let arr = [];
        let curr = this.first;
        while(curr){
            arr.push(curr.val);
            curr = curr.next
        }
        console.log(arr);
        return true;
    }

}

let queue = new Queue;
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

queue.print()