// write function isSubsequence which takes in 2 strings and checks if the chars in first string form a subsequence of chars in the second string, without their order changing

// iterative
const isSubsequenceI = (str1, str2) => {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false
}

// recursive
const isSubsequenceR = (str1, str2) => {
    if (str1.length === 0) return true;
    if (str2.length === 0) return true;
    if (str2[0] === str1[0]) return isSubsequenceR(str1.slice(1), str2.slice(1));
    return isSubsequenceR(str1, str2.slice(1));
}