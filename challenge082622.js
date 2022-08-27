// 8kyu - Contamination #1 - String

// P - text, character
// R - emptyString if text or char are empty (character is a string length of 1 or empty)
// E - ("abc", "z") ==> "zzz"

const contamination = (text, char) => char.repeat(text.length)