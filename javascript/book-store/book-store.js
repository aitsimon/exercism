//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DISCOUNTS = {
  0: 0,
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75,
};
function getSets(arraylist) {
  let allSets = [];
  while (arraylist.length) {
    let tempSet = new Set(arraylist);
    allSets.push(tempSet);
    [...tempSet].forEach((book) =>
      arraylist.splice(arraylist.indexOf(book), 1)
    );
  }
  return allSets;
}

export function cost(basket) {
  let allSets = getSets(basket);
  let cost = 0;
  allSets.forEach((set) => {
    cost = cost + DISCOUNTS[set.size] * 800 * set.size;
  });
  return cost;
}
const books = [1, 1, 2, 2, 3, 3, 4, 5];
console.log(cost(books));
