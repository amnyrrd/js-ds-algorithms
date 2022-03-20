class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.print(), newNode.val;
    }

    pop(){
        if(!this.head) return undefined;
        let curr = this.head;
        let newTail = curr;
        while(curr.next){
            newTail = curr;
            curr = curr.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return this.print(), curr.val;
    }

    shift(){
        if(!this.head) return undefined;
        var currHead = this.head;
        this.head = currHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return this.print(), currHead.val;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this.print(), newNode.val;
    }

    get(idx){
        let curr = this.head;
        let count = 0;
        if(idx < 0 || idx >= this.length) return null;
        while(count !== idx){
            curr = curr.next;
            count++
        }
        return curr  // to get obj, which makes set() work
        // return curr.val // to get actual value, not obj, but doesn't work with set()
    }

    set(idx, val){
        let foundNode = this.get(idx);
        if(foundNode !== null){
            foundNode.val = val;
            return this.print(), val;
        }
        return false
    }

    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) !!this.push(val);
        if(idx === 0) return !!this.unshift(val);
        else {
            let newNode = new Node(val) 
            let prev = this.get(idx - 1)
            let temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;
            this.length++;
            return this.print(), newNode.val;
        }
    } 

    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === this.length - 1)  return this.pop();
        if(idx === 0) return this.shift()
        let prevNode = this.get(idx - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return this.print(), removed.val;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node
        let prev = null;
        let next;
        let i = 0;
        while(i < this.length){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            i++;
        }
        return this.print()
    }

    print(){
        let arr = [];
        let curr = this.head;
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr);
        return true;
    }
}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.remove(2)
list.insert(2, 333)
list.set(3, 444)
list.unshift(999)
list.reverse()
list.print()