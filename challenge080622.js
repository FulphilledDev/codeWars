// 8kyu - Twice as Old

// P - father age, son age
// R - how many years dad will be or was twice as old
// E - (36,7) --> 22

const twiceAsOld = (dadAge, sonAge) => {
    let whenTwiceAsOld = sonAge*2 - dadAge
    if (Math.sign(whenTwiceAsOld) == -1) {
        return whenTwiceAsOld*-1
    } else {
        return whenTwiceAsOld
    }
}