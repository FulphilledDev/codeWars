// 8kyu - Exclamation Marks Series #4: Remove all but ensure at end

// P - string
// R - string with only '!' at the end
// E - "Hi! Hi!" ==> "Hi Hi!"

const remove = string => string.replace(/!+/g, '') + '!'