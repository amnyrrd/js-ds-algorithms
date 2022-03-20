// write function reverse which accepts a str and returns a new str in reverse

const reverse = (str) => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0]
}

reverse('abcdefghijkl')