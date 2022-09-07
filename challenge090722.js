// 8kyu - Grasshopper - Grade Book

// P - 3 scores
// R - average letter grade based on every 10 points
// E - (95, 90, 93) --> A

function getGrade (s1, s2, s3) {
    return { 10: 'A', 9: 'A', 8: 'B', 7: 'C', 6: 'D' }[Math.floor((s1 + s2 + s3) / 30)] || 'F'
}