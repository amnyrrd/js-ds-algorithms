// write function isPalindrome which returns true if str passed in is a palindrome, otherwise return false

const isPalindrome = (str) => {
    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false
}