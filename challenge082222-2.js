// 7kyu - Find the missing element between two arrays

// P - 2 integer arrays
// R - Missing integer from 2nd array
// E - ([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

// This passes ALL test EXCEPT for the number 3
// const findMissing = (a1, a2) => Number(a1.filter(i => !a2.includes(i)).join(''))

// Sort and normal loop comparison of each index
function findMissing(a1, a2) {
    a1.sort();
    a2.sort();

    for (var i = 0; i < a1.length; i++) {
        if (a1[i] != a2[i]) {
            return a1[i];
        }
    }
}


