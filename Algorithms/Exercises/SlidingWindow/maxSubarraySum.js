// given an arr of ints and a num, write function maxSubarraySum which finds the max sum of a subarray with the length of the num passed to the function

const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;
    let total = 0;
    let i = 0;
    while(i < num){
        total += arr[i];
        i++;
    }
    let currTotal = total;
    let j = num;
    while(j < arr.length){
        currTotal += arr[j] - arr[j-num];
        total = Math.max(total, currTotal)
        j++;
    }
    return total
}