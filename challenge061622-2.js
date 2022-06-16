// Friend or Foe - 7kyu

// P - List of friends
// R - Names with only 4 letters
// E - Input = ['Ryan', 'Kieran', 'Jason', 'Yous']
// E - Output = ['Ryan', 'Yous']

function friend(friends) {
    // Filter friends that are equal to 4 letters
    return friends.filter(word => word.length === 4);

}