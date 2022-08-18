// 7kyu - Name Array Capping

// P - array of names
// R - array with only first letter capitalized

function capMe(names) {
    return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
}