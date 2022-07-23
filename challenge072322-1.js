// 8kyu - Debugging: Jenny's Secret Message

// Original Function
//  function greet(name) {
//      return "Hello, " + name + "!"
//      if (name === "Johnny")
//          return "Hello, my love!";
//  }

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}