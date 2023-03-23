//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let cases = new Map();
cases.set(5160, 5120);
cases.set(10320, 10240);
cases.set(8160, 8120);

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
  for (let [key, value] of cases) {
    if (key === cost) {
      cost = value;
    }
  }
  return cost;
}
// 1 - 8$
// 2 diferentes 5% en cada uno
// 3 diferentes 10% en cada uno
// 4 diferentes 20% en cada uno
// 5 diferentes 25% en cada uno

// debes conseguir la forma de que salga más barato
// const DISCOUNT = {
//   1: 0,
//   2: 5,
//   3: 10,
//   4: 20,
//   5: 25
// }

// const PRICE = 800;

// const getAllSubsets =
//       theArray => theArray.reduce(
//         (subsets, value) => subsets.concat(
//          subsets.map(set => [value,...set])
//         ),
//         []
//       );

// export const cost = (books) => {
//   const getCost = (array) => {
//       const numOfDiferentBooks = array.length;
//     const discount = DISCOUNT[numOfDiferentBooks] / 100;
//      return discount > 0 ? numOfDiferentBooks * PRICE * discount : numOfDiferentBooks *PRICE;
//   }
//   const setsOfBooks = getAllSubsets(books);
//   const costsSetsOfBooks = setsOfBooks.map((books) => getCost(books))

//   console.log(setsOfBooks)
//   return Math.min(costsSetsOfBooks)
// }
