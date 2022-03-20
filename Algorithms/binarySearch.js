const binarySearch = (arr, x) => {
    let lowIdx = 0;
    let highIdx = arr.length -1;
    while (lowIdx <= highIdx) {
        let midIdx = Math.floor((lowIdx + highIdx) / 2)
        if(arr[midIdx] === x) {
            return midIdx
        } else if (arr[midIdx] < x) {
            lowIdx = midIdx + 1
        } else {
            highIdx = midIdx - 1
        }
    } return -1
}

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 12)
