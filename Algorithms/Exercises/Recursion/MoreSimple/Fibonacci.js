// write function fib which accepts a num and returns the Nth num in the fibonacci sequence

const fib = (n, memo = []) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res
}