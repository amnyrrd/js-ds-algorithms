// write a function factorial which accepts a num and returns the factorial of that num

const factorial = (num) => {
    if (num < 0) return 0;
    if (num <= 1) return 1;
    return num * factorial(num - 1)
}