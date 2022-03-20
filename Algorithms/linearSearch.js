const linearSearch = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i
        }
    } return false
}

linearSearch([1,2,3,4,5], 5)