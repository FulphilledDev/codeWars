// 7kyu - Product of Maximum of Array (Array Series #2)

// P - Array/List of Integers
// R - Product of k maximal numbers
// E - ([4,3,5], 2) --> 20; ([10,8,7,9], 3) --> 720

function maxProduct(n, k) {
    return n.sort((a, b) => a - b).slice(-k).reduce((a, b) => a * b)
}