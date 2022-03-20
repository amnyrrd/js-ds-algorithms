const merge = (arr1, arr2) => {
    let res = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        res.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        res.push(arr2[j])
        j++
    }
    return res
}

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

merge([2,12,6,1], [4,11,3,6,0,-11])