// 8kyu - Is n divisible by x and y

// P - n, x, y
// R - true as long as positive and non-zero digits
// E -
// --> 1) n = 3, x = 1, y = 3 => true because   3 is divisible by 1 and 3
// --> 2) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3

function isDivisible(n, x, y) {
    // return when n modulus x and y are equal to 0
    return (n % x === 0 && n % y === 0)
}
