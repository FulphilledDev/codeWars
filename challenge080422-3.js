// 6kyu - Who likes it?

// take in array of strings
// return a string based on the length of the array
// ["Alex", "Jacob", "Mark", "Max"]  =>  "Alex, Jacob and 2 others like this"

function likes(names) {
    // evaluate length of array
    // create conditional for 0, 1, 2, 3, 4+ length
    if (names.length === 0) {
        return `no one likes this`
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}