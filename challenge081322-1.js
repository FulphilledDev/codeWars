// 7kyu - Flatten and sort an array

// P - 2D array (Just means mini arrays at each index of main array)
// R - flattened and sorted (default ascending) array
// E - [3, 2, 1], [7, 9, 8], [6, 4, 5]] --> [1, 2, 3, 4, 5, 6, 7, 8, 9]

function flattenAndSort(array) {
    return array.flat().sort((prev, curr) => prev - curr)
}