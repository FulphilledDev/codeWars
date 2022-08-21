// 7kyu - List to Array

// P - list of objects
// R - array of objects
// E - {value: 1, next: {value: 2, next: {value: 3, next: null}}} --> [1, 2, 3]

function listToArray(list) {
    // Create empty array to push items to
    let arr = [];
    // Push each item in the list to empty array
    for (let item = list; item; item = item.next)
        arr.push(item.value);
    return arr;
}

// Alternative solution...

// function listToArray(list) {
//      return !list ? [] : [list.value].concat(listToArray(list.next));
// }