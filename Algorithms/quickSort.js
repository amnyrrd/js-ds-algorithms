const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const pivot = (arr, start = 0 , end = arr.length - 1) => {
    let piv = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i < arr.length; i++){
        if(piv > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right){
        let pivIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivIndex - 1)
        // right
        quickSort(arr, pivIndex + 1, right)
    }
    return arr
}
