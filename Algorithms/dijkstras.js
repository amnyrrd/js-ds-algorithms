class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.vals = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.vals.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.vals.length - 1;
        const el = this.vals[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.vals[parentIdx];
            if (el.priority >= parent.priority) break;
            else {
                this.vals[parentIdx] = el;
                // console.log('el = ' + el)
                this.vals[idx] = parent;
                // console.log('parent = '  + parent)
                idx = parentIdx;
            }
        }
    }

    dequeue() {
        const min = this.vals[0];
        const end = this.vals.pop()
        if (this.vals.length > 0) {
            this.vals[0] = end;
            this.sinkDown()
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.vals.length;
        const el = this.vals[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.vals[leftChildIdx];
                if (leftChild.priority < el.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.vals[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < el.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break;
            this.vals[idx] = this.vals[swap];
            this.vals[swap] = el;
            idx = swap;
        }
    }

}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vert) {
        if (!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
    }

    addEdge(vert1, vert2, weight) {
        this.adjacencyList[vert1].push({
            node: vert2,
            weight
        });
        this.adjacencyList[vert2].push({
            node: vert1,
            weight
        });
    }

    dijkstra(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        // build initial state
        for (let vert in this.adjacencyList) {
            if (vert === start) {
                distances[vert] = 0;
                nodes.enqueue(vert, 0);
            } else {
                distances[vert] = Infinity;
                nodes.enqueue(vert, Infinity);
            }
            previous[vert] = null;
        }
        // as long as there is something to visit
        while (nodes.vals.length) {
            smallest = nodes.dequeue().val;
            if (smallest === end) {
                //done; build up path to return to end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighbor node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        // updates new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updates previous => how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);

                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);