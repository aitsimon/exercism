/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
  return time > 0
    ? 'Not done, please wait.'
    : time === 0
    ? 'Lasagna is done.'
    : 'You forgot to set the timer.';
}

export function preparationTime(layers, avgTime) {
  if (avgTime) {
    return layers.reduce((acc, layer) => {
      return acc + avgTime;
    }, 0);
  } else {
    return layers.reduce((acc, layer) => {
      return acc + 2;
    }, 0);
  }
}

export function quantities(layers) {
  let object = {
    noodles: 0,
    sauce: 0,
  };
  layers.reduce((acc, layer) => {
    if (layer === 'noodles') object.noodles += 50;
    if (layer === 'sauce') object.sauce += 0.2;
  }, 0);
  return object;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}
export function scaleRecipe(recipe, scale) {
  scale /= 2;
  let newRecipe = {};
  // Object.keys(recipe).forEach((key) => {
  //   newRecipe[key] = recipe[key] * scale;
  // });
  for (let ingredient in recipe) {
    newRecipe[ingredient] = recipe[ingredient] * scale;
  }
  return newRecipe;
}
