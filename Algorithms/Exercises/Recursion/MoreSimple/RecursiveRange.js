// write function recursiveRange which accetps a num and adds up all the nums from 0 to the num passed to the function

const recursiveRange = (num) => {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}