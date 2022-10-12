// 8kyu - Training JS #21: String - .trim() and string template

// P - string
// R - string of 5 lines (\n = new line), trim white space at ends
// E - "  a" ==> "a\naa\naaa\naaaa\naaaaa"

const fiveLine = s => [...Array(5)].map((_, i) => s.trim().repeat(i + 1)).join('\n')