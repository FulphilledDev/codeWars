// 8kyu - Grasshopper - Combine Strings

// P - firstName, lastName
// R - combinedNames
// E - ("james", "stevens") => 'james stevens'

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`

// Best written as...
// const combineNames = (...names) => names.join(' ');