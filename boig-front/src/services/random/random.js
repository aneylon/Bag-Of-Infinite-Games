/**
 * Return a random number between 1 and the maximum number provided in the argument
 * @param {Number} max Maximum number to return
 * @returns {Number}
 */

export const random = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

export const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min + 1;
};
