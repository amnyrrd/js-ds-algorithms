// write function flatten which accepts an arr of arrs and returns a new arr with all vals flattened

const flatten = (arrOfArrs) => {
    let newArr = [];
    let i = 0;
    while (i < arrOfArrs.length){
        if (Array.isArray(arrOfArrs[i])){
            newArr = newArr.concat(flatten(arrOfArrs[i]))
        } else {
            newArr.push(arrOfArrs[i])
        }
        i++;
    }
    return newArr
}