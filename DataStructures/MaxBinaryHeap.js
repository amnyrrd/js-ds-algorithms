class MaxBinaryHeap {
    constructor(){
        this.vals = [60,19,22,434,666,23,66,2,7,-33,-420,982];
    }

    insert(val){
        this.vals.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.vals.length - 1;
        const el = this.vals[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.vals[parentIdx];
            if(el <= parent) break; 
            else {
                this.vals[parentIdx] = el;
                console.log('el = ' + el)
                this.vals[idx] = parent;
                console.log('parent = '  + parent)
                idx = parentIdx;
            }
        }
    }

    removeMax(){
        const max = this.vals[0];
        const end = this.vals.pop()
        if(this.vals.length > 0){
            this.vals[0] = end;
            this.sinkDown()
        }
        return max;
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
                if(leftChild > el){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.vals[rightChildIdx];
                if(
                    (swap === null && rightChild > el) || 
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap
heap.insert(420)
heap.bubbleUp()
console.log(heap.removeMax())
console.log(heap.sinkDown())

console.log(heap)
