// Find the smallest integer in the array

// P - Array of Integer
// R - Smallest Integer of Array
// E - [34, 15, 88, 2] => 2


class SmallestIntegerFinder {
    // Set Function
    findSmallestInt(arr) {
        // Sort array
        arr.sort((a, b) => {
            return a - b
        })
        //Return Lowest Number
        return arr[0]
    }
}