// write function nestedEvenSum which returns the sum of all even nums in an obj which may contain nested objs

const nestedEvenSum = (obj, sum = 0) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key]
        }
    }
    return sum
}