// write function minSubArrayLength which accepts an arr of pos ints, and a pos int. Result of function returns minimal length of a contiguous subarr of which sum is greater than or equal to the int passed to the function. if there isn't one passed, return 0

const minSubArrayLength = (nums, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start < nums.length) {
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        } else if (total >= sum) {
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        } else break;
    }
    return minLen === Infinity ? 0 : minLen
}