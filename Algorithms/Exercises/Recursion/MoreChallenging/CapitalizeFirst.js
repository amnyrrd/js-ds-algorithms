// write function capitalizeFirst which takes in an arr of strs, and capitalize first letter of each str

const capitalizeFirst = (arrOfStrs) => {
    if (arrOfStrs.length === 1) {
        return [arrOfStrs[0][0].toUpperCase() + arrOfStrs[0].substr(1)]
    }
    const res = capitalizeFirst(arrOfStrs.slice(0, -1));
    const str = arrOfStrs.slice(arrOfStrs.length - 1)[0][0].toUpperCase() + arrOfStrs.slice(arrOfStrs.length -1)[0].substr(1)
    res.push(str);
    return res;
}