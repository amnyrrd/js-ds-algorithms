// write function findLongestSubstring which accepts a string and return length of longest substring with all distinct chars

const findLongestSubstring = (str) => {
    let longest = 0;
    let seen = {};
    let start = 0;
    let i = 0;
    while (i < str.length) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }
        // index - beginning of substring + 1 (to include current in count)        
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
        i++;
    }
    return longest
}