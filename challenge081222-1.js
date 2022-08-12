// 8kyu - Training JS #31: methods of arrayObject---isArray() indexOf() and toString()

// P - number array
// R - if arr != array --> "fake" else if arr.indexOf(5) || arr.indexOf(13) ? "black" : "white"
// E - (5,13) --> "It's a fake array"; ([5,13]) --> "It's a black array"

function blackAndWhite(arr) {
    // is not array
    if (Array.isArray(arr) != true) {
        return "It's a fake array"
    }
    // contains elements 5 and 13
    if (arr.includes(5) && arr.includes(13)) {
        return "It's a black array"
    }
    // doesnt contain 5 and 13
    if (!arr.includes(5) || !arr.includes(13)) {
        return "It's a white array"
    }
}

// A clever way to code it written by 0lexa
// const blackAndWhite = arr =>
// `It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;