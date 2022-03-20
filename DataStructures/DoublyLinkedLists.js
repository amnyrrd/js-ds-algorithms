class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
       let newNode = new Node(val);
       if(this.head === null){
           this.head = newNode;
           this.tail = newNode;
       } else if(this.head !== null){
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode;
       }
       this.length++;
       return this.print(), this.tail.val;
    }

    pop(){
        let currTail = this.tail;
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
        this.tail = currTail.prev;
        this.tail.next = null;
        currTail.prev = null;
        }
        this.length--;
        return this.print(), currTail.val;
    }
    
    shift(){
        let oldHead = this.head;
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        }
        this.length--;
        return this.print(), oldHead.val;
    }
    
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this.print(), val;
    }

    get(idx){
        let curr, count;
        if(idx < 0 || idx >= this.length) return null;
        if(idx <= this.length / 2){
            curr = this.head;
            count = 0;
            while(count !== idx){
            curr = curr.next;
            count++
            }
        }
        else{
            curr = this.tail;
            count = this.length - 1;
            while(count !== idx){
                curr = curr.prev;
                count--;
            }
        }
        return curr;  // to get obj, which makes set() work;
        // return curr.val  // to get actual value, not obj, but doesn't work with set()
    }

    set(idx, val){
        let foundNode = this.get(idx);
        if(foundNode !== null){
            foundNode.val = val;
            return this.print();
        }
        return false
    }

    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val);
        else {
            let newNode = new Node(val);
            let prev = this.get(idx - 1);
            let temp = prev.next;
            prev.next = newNode, newNode.prev = prev;
            newNode.next = temp, temp.prev = newNode;
            this.length++;
            return newNode, this.print();
        }
    }

    remove(idx){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.shift();
        if(idx === this.length - 1) return !!this.pop();
        else {
            let removed = this.get(idx);
            removed.prev.next = removed.next;
            removed.next.prev = removed.prev;
            removed.next, removed.prev = null;
            this.length--;
            return this.print()
        }
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        let i = 0;
        while(i < this.length){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            i++
        }
        // return this
        return this.print();
    }

    print(){
        let arr = [];
        let curr = this.head;
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr)
        return true;
    }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.pop()
list.remove(2)
list.insert(33,12)
// list.shift()
// list.unshift()
list.push(55)
list.reverse()

console.log(list)