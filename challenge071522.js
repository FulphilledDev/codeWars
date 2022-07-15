// 8kyu - A Needle in the Haystack

// P - haystack with junk plus one needle
// R - position(index) of needle
// E - ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
    // use 'indexOf' method and concatenate with string
    return `found the needle at position ` + haystack.indexOf('needle')
}