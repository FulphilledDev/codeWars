// 7kyu - The Highest Profit

// P - array
// R - Min and Maximum values of array
// E - [1,2,3,4,5] --> [1,5]; [2334454,5] --> [5,2334454]

const minMax = arr => {
    // return the min at index 0, and max at index 1, of array
    return [Math.min(...arr), Math.max(...arr)];
}