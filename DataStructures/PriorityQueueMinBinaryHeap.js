class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.vals = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.vals.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.vals.length - 1;
        const el = this.vals[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.vals[parentIdx];
            if(el.priority >= parent.priority) break; 
            else {
                this.vals[parentIdx] = el;
                // console.log('el = ' + el)
                this.vals[idx] = parent;
                // console.log('parent = '  + parent)
                idx = parentIdx;
            }
        }
    }

    dequeue(){
        const min = this.vals[0];
        const end = this.vals.pop()
        if(this.vals.length > 0){
            this.vals[0] = end;
            this.sinkDown()
        }
        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.vals.length;
        const el = this.vals[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.vals[leftChildIdx];
                if(leftChild.priority > el.priority){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.vals[rightChildIdx];
                if(
                    (swap === null && rightChild.priority > el.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ){
                    swap = rightChildIdx
                }
            }

            if(swap === null) break;
            this.vals[idx] = this.vals[swap];
            this.vals[swap] = el;
            idx = swap;
        }
    }

}

let er = new PriorityQueue()
er.enqueue("common cold",5)
er.enqueue("gunshot wound", 1)
er.enqueue("high fever",4)
er.enqueue("broken arm",2)
er.enqueue("glass in foot",3)

console.log(er)
