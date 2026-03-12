import { random, randomBetween } from "./random";

test("Random number", () => {
  expect(random(5)).toBeGreaterThan(0);
  expect(random(5)).toBeLessThan(6);
});

test("Random Between", () => {
  expect(randomBetween(2, 6)).toBeGreaterThan(0);
  expect(randomBetween(2, 6)).toBeLessThan(7);
});
