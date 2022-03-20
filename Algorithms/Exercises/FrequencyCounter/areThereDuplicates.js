//write a function areThereDuplicates that accepts a var number of args, and checks for any duplicates among args passed in

// frequency counter solution
const areThereDuplicatesFC = () => {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

// multiple pointers solution
const areThereDuplicatesMP = (...args) => {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// quicky one liner
const areThereDuplicates = () => {
    return new Set(arguments).size !== arguments.length
}