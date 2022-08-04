// 8kyu - DNA to RNA conversion

// take in string
// return string with T replaced by U
// "GCAT" => "GCAU"

function DNAtoRNA(dna) {
    // split 
    return dna.split('')
        // map and replace T with U
        .map(letter => letter.replace('T', 'U'))
        // join
        .join('')
}

// Now using a ternary operator
// function DNAtoRNA(dna) {
//     return dna.split('').map(letter => (letter === 'T') ? letter = 'U' : letter).join('')
// }