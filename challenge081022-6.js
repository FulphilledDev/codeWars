// 8kyu - SpeedCode #2 - Array Madness

// P - 2 integer arrays a, b
// R - True if SUM of SQUARES of each element in A > SUM of CUBES of each element in B
// E - [4,5,6],[1,2,3] --> true; [5,6,7],[4,5,6] --> false

const arrayMadness = (a, b) => a.map(x => x ** 2).reduce((c, d) => c + d, 0) > b.map(x => x ** 3).reduce((c, d) => c + d, 0) ? true : false

// Less redundant and more organized...
// const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0)

// OR
// function arrayMadness(a, b) {
//     return a.reduce((sum, el) => sum + el ** 2, 0) >
//         b.reduce((sum, el) => sum + el ** 3, 0);
// }