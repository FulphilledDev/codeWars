// 8kyu - Reverse Sequence

// P - number
// R - Array of counting down to 1 from n
// E - n=5 --> [5, 4, 3, 2, 1]

const reverseSeq = n => {
    // Start array and fill with nothing, then counting condition down to 0
    return Array(n).fill().map((_, i) => n - i)
}