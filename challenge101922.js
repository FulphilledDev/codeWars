// 8kyu - The Feast of Many Beasts

// P - beast, dish
// R - true or false
// E - "great blue heron", "garlic naan" --> true

const feast = (beast, dish) => beast.charAt(0)===dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1) ? true : false