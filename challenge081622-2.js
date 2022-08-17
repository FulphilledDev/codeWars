// 7kyu - Sum of array singles

// P - array of numbers with 2 that only occur once
// R - sum of single occurance numbers
// E - ([4,5,7,5,4,8]) --> 15

const repeats = arr => {
    arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a, b) => a + b);
}