// 8kyu - Count by X

// P - x, n
// R - array of n multiples of x
// E - (1,10) --> [1,2,3,4,5,6,7,8,9,10]; (2,5) --> [2,4,6,8,10]

const countBy = (x, n) => {
    // array like object n number of elements, parameters empty element and index by iteration of calculation
    return Array.from({ length: n }, (_, i) => x + i * x)
}