// Sum of Positive

// P - Array of Numbers
// R - Sum of All Positive Numbers
// E - [1,-4,7,12] => 20

function positiveSum(arr) {
    let acc = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            acc += arr[i]
        }
    }
    return acc
};

