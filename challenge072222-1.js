// 7kyu - Filter List

// P - list array
// R - filtered array with only numbers
// E - [1, 2, "a", "b"] --> [1, 2]

function filter_list(l) {
    // Filter array for numbers
    return l.filter((e, i, a) => e === Number(e));
}