// 7kyu - Even numbers in an array

// P - array of numbers
// R - new array of length number containing LAST even number in SAME order
// E - ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) --> [4, 6, 8]; 

function evenNumbers(array, number) {
    // declare variable with a value of empty array 
    let newArr = [];
    // create loop
    for (i = 0; i < array.length; i++) {
        // condition for even numbers at each index
        if (array[i] % 2 === 0) {
            // push to declared variable
            newArr.push(array[i])
        }
    }
    // slice method will modify array to 'number' of numbers 
    return newArr.slice(-number)
}


// More concise code using 'filter' and 'slice'
// const evenNumbers = (array, numbers) => array.filter(e => e % 2 === 0).slice(-number)