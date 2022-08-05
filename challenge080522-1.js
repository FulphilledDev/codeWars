// 7kyu - Descending Order

// P - Array of digits
// R - digits in descending order (as highest possible number)
// E - Input: 42145 --> Output: 54421


const descendingOrder = n => {
    // wrap in Number constructor...
    // while taking in constructor String n and split...
    // then sort each value of split n array in descending order...
    // and join without spaces
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
}