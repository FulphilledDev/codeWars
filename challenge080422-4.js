// 7kyu - Get the Middle Character

// take in string
// return middle character (or two middle characters if the length is even)
// "test" => "es"

function getMiddle(s) {
    // find middle position and round down
    let middle = Math.floor(s.length / 2)
    // if the length of string is odd return charAt(middle)
    if (s.length % 2 === 1) {
        return `${s.charAt(middle)}`
    }
    // if the length of string is even return charAt(middle-1)charAt(middle)
    if (s.length % 2 === 0) {
        return `${s.charAt(middle - 1)}${s.charAt(middle)}`
    }
}