// 8kyu - Implement Array.prototype.filter()

// P - own array with filter function
// R - filtered array with condition
// E - [1,2,3,4].filter((num)=>{ return num > 3}) --> [4]


// the parameter of 'func' represents the condition that would be passed in
Array.prototype.filter = function (func) {
    // the variable of result represents the new array that '.filter' makes
    let result = [];

    // create the action of '.filter' method (aka Loop)
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            // push this index to result array
            result.push(this[i])
        }
    }
    return result
}

// Also explained as... via sempjc on Kata:

// This filter function return an array with values that meet
// the conditions set in the ruleCondition callback function.

// Array.prototype.filter = function (ruleCondition) {
//     // Create an empty array to store the values that satisfy the ruleCondition
//     var arr = [];

//     this.forEach(function (currentValue) {
//         // Evaluate each element and push the value when content in array meet condition
//         if (ruleCondition(currentValue)) arr.push(currentValue);
//     });
//     return arr;
// }