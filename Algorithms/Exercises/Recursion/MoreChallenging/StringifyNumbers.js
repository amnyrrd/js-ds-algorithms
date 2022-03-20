// write function stringifyNumbers which takes in an obj and finds all of the values that are nums and converts them to strings

const stringifyNumbers = (obj) => {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}