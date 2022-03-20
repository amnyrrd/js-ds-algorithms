const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i ++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        if(smallest != i){
            swap(arr, i, smallest)
        }
    }
    return arr
}

selectionSort([3,7,1,5,2,9,0,4])
