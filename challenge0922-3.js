// 8kyu - Remove an Exclamation Mark From The End of a String

// P - String
// R - String if it ends with "!", and remove "!"
// E - "Hi!" --> "Hi"

const remove = (string) => {
  if (string.endsWith("!") === true) {
    return string.slice(0, (string.length - 1))
  }
  return string
}