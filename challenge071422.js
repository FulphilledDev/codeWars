// 8kyu - Abbreviate a Two Word Name

// P - Name
// R - Initials
// E - Sam Harris => S.H

function abbrevName(name) {
    // Split name into two words in new variable arr
    let arr = name.split(' ');
    // Per index, grab 0 index and separate with a "." and make uppercase]
    return (arr[0][0] + "." + arr[1][0]).toUpperCase()
}