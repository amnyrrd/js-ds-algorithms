// write function someRecursive which accepts an arr and a callback. Function returns true if a single val in the arr returns true when passed to calback. Otherwise returns false

const someRecursive = (arr, callback) => {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback)
}