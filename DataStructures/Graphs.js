class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vert){
        if(!this.adjacencyList[vert]){
            this.adjacencyList[vert] = [];
        }
    }

    addEdge(vert1, vert2){
        this.adjacencyList[vert1].push(vert2);
        this.adjacencyList[vert2].push(vert1);
    }

    removeEdge(vert1, vert2){
        this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(
            v => v !== vert1
        );
        this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(
            v => v !== vert1
        );
    }

    removeVertex(vert){
        while(this.adjacencyList[vert].length){
            const adjacentVert = this.adjacencyList[vert].pop();
            this.removeEdge(vert, adjacentVert)
        } 
        delete this.adjacencyList[vert]
    }

    depthFirstSearchRecursive(start){
        const res = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vert){
            if(!vert) return null;
            visited[vert] = true;
            res.push(vert);
            adjacencyList[vert].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);
        console.log(visited)
        return res;
    }

    depthFirstSearchIterative(start){
        let stack = [start];
        const res = [];
        const visited = {};
        let currVert;

        visited[start] = true;
        while(stack.length){
            currVert = stack.pop()
            res.push(currVert);
            this.adjacencyList[currVert].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        console.log(visited)
        return res;
    }

    breadthFirstSearch(start){
        let queue = [start];
        const res = [];
        const visited = {};
        let currVert;

        visited[start] = true;
        while(queue.length){
            currVert = queue.shift();
            res.push(currVert);
            this.adjacencyList[currVert].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            });
        }
        console.log(visited)
        return res;
    }

}

let graph = new Graph();
graph.addVertex('SF');
graph.addVertex('LA');
graph.addVertex('PDX');
graph.addVertex('SEA');
graph.addVertex('SD');

graph.addEdge('LA', 'SF')
graph.addEdge('LA', 'PDX')
graph.addEdge('LA', 'SEA')
graph.addEdge('LA', 'SD')

graph.addEdge('SF', 'PDX')
graph.addEdge('SF', 'SEA')
graph.addEdge('SF', 'SD')

graph.addEdge('PDX', 'SEA')
graph.addEdge('PDX', 'SD')

graph.addEdge('SEA', 'SD')

graph.removeEdge('LA', 'SF')
graph.removeEdge('SF', 'LA')

graph.removeVertex('SD')

console.log(graph)
