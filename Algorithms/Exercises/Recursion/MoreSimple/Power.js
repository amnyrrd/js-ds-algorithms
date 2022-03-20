// write function power which accepts a base and an exponent. Should return the power of the base to the exponent. Mimics Math.pow()

const power = (b, e) => {
    if (e === 0) return 1;
    return b * power(b, e - 1)
}