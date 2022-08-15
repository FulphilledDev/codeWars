// 7kyu - Minimize Sum of Array

// P - array of integers
// R - minimum sum (summing each 2 integers product)
// E - minSum({5,4,2,3}) ==> 22 --> 5*2 + 3*4 = 22


const minSum = (arr) => {
    // declare var that sorts arr
    const sort = arr.sort((a, b) => a - b)
    // declare var with value 0 as result
    let result = 0;
    // loop through half the length of arr
    for (let i = 0; i < arr.length / 2; i++) {
        // add the product of current index to last number at the index of 'length minus 1 minus current index'
        result += sort[i] * sort[sort.length - 1 - i]
    }
    return result
}

// Best written as...
// function minSum(arr) {
//     return arr.sort((a, b) => a - b)
//         .slice(0, arr.length / 2)
//         .reduce((acc, curr, index) => acc += curr * arr[arr.length - index - 1], 0)
// }