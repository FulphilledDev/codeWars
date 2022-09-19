// 8kyu - Is the String UPPERCASE?

// P - String
// R - true or false if this string is/is not upper case
// E - '#loveWINS'.isUpperCase() --> false; '#LOVEWINS'.isUpperCase() --> true

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}