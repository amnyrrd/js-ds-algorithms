// write function capitalizeWords, takes in an arr of words and returns a new arr w/ each word capitalized

const capitalizeWords = (arrOfStrs) => {
    if (arrOfStrs.length === 1) return [arrOfStrs[0].toUpperCase()];
    let res = capitalizeWords(arrOfStrs.slice(0,-1));
    res.push(arrOfStrs.slice(arrOfStrs.length - 1)[0].toUpperCase());
    return res
}

