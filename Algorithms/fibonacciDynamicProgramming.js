// verrrrrryyyyyy sllllooooowwwwwww
const fibNoMemo = (n) => {
    if (n <= 2) return 1;
    return fibNoMemo(n-1) + fibNoMemo(n-2)
}

// memoized
const fibMemoized = (n, memo = []) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
    memo[n] = res;
    return res
}

// tabulated
const fibTabulated = (n) => {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n]
}