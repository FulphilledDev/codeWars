// 8kyu - Reversing Words in a String

// P - String of words
// R - Reversed order of words
// E - "Hello World" --> "World Hello"

const reverse = (string) => {
    return string
        .split(' ')
        .reverse()
        .join(' ')
}