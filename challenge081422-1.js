// 7kyu - Add property to every object in array

// P - array of questions
// R - new property "usersAnswer" to each object in array of questions
// E - var questions = [{ question: "What's the currency of the USA?", choices: ["US dollar", "Ruble", "Horses", "Gold"], corAnswer: 0}
//      ---> var questions = [{question: "What's the currency of the USA?", choices: ["US dollar", "Ruble", "Horses", "Gold"], corAnswer: 0, usersAnswer: null}

questions.forEach((q) => {
    q.usersAnswer = null
})