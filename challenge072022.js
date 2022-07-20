// 8kyu - Grasshopper - Personalized Message

// P - name, owner
// R - personalized greeting : name == owner return 'Hello boss' else 'Hello guest'
// E - ('Greg', 'Daniel') ==> 'Hello guest'

const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`