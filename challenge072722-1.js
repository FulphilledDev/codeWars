// 8kyu - Are you playing banjo?

// P - name
// R - string if name start with "R" or "r"
// E - "Adam" --> "Adam does not play banjo"; "Ringo" --> "Ringo plays banjo"

function areYouPlayingBanjo(name) {
    if (name.startsWith('R')) {
        return `${name} plays banjo`;
    } else if (name.startsWith('r')) {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}