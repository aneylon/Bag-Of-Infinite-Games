import { random } from "./random";

test("Random number", () => {
  // todo : just just JEST?
  // to be a number
  // to not be a stirng
  // to be greater than 0
  // to be less than the max value
  //   expect(random(5)).toHaveValue();
  expect(random(5)).toBeGreaterThan(0);
  expect(random(5)).toBeLessThan(6);
});
