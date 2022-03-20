// write function productOfArray which takes an arr of nums and returns the product of them all

const productOfArray = (arr) => {
    if (arr.length === 0) return 1 
    return arr[0] * productOfArray(arr.slice(1))
}