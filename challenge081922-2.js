// 7kyu - Find Count of Most Frequent Item in an Array

// P - Array of integers
// R - 0 for empty array else output count of most frequent integer
// E - [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3] --> 5

const mostFrequentItemCount = (c) => {
    return c.length ? Math.max(...c.map(x => c.filter(y => y == x).length)) : 0;
}