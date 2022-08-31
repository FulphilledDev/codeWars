// 8kyu - Thinkful - Logic Drills: Taffic Lights

// P - string (current color of light)
// R - next light color
// E - 'green' --> 'yellow'

const updateLight = current => current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'