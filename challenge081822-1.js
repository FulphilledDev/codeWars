// 7kyu - Nth Smallest Element

// P - Array/List of Integers
// R - 'Nth' smallest element of Array
// E - ([-102,-16,-1,-2,-367,-9], 5) --> -2; ([2,169,13,-5,0,-1],4) --> 2

const nthSmallest = (arr, pos) => {
    // sort array in ascending order
    arr.sort((a, b) => a - b)
    // return array index of position -1 (arrays are zero-indexed)
    return arr[pos - 1]
}