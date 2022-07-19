// 8kyu - Beginner Series #2 Clock

// P - hour, minute, seconds
// R - milliseconds
// E - h = 0, m = 1, s = 1 => result = 61000

function past(h, m, s) {
    // conditional for max number per variable
    if (h <= 23 && m <= 59 && s <= 59) {
        // each variable multiplied by lesser variable, summed, then multiplied by 1000 to get MILLI-seconds
        return (((h * 60 * 60) + (m * 60) + s) * 1000)
    }
}
