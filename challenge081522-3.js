// 7kyu - Counting Array Elements

// P - array
// R - number of each unique element present
// E - ['a', 'a', 'b', 'b', 'b'] --> { 'a': 2, 'b': 3 }


const count = (arr) => {
    // var to store count for each obj
    let obj = {};
    // forEach obj at i index, add else equals 1
    arr.forEach(i => {
        obj[i] ? obj[i]++ : obj[i] = 1;
    });
    return obj;
}

// Without ternary operator...
// function count(array) {
//     var names = {};
//     array.forEach(item => {
//         names[item] = (names[item] || 0) + 1;
//     });
//     return names;
// }