// 8kyu - Push a hash/an object into array

// P - bug of pushing a hash or object
// R - fixed function

items = []
// Bugged Parameter
// items.push { a: "b", c: "d" }

// Fixed Bug
items.push({ a: 'b', c: 'd' })