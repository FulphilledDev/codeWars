// 8kyu - Opposites Attract

// P - number of petals for 2 different flowers
// R - true if one odd and other even
// E - [1,2] --> true

const lovefunc = (flower1, flower2) => {
    // flower 1 even and flower 2 odd
    if (flower1 % 2 == 0 && flower2 % 2 == 1) {
        return true;
    }
    // flower 1 odd and flower 2 even
    else if (flower1 % 2 == 1 && flower2 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}