import { random } from "./random";

test("Random number", () => {
  // todo : just just JEST?
  // to be a number
  // to not be a stirng
  // to be greater than 0
  // to be less than the max value
  //   expect(random(5)).toHaveValue();
  console.log(random(4));
  console.assert(random(4) > 0);
  console.assert(random(3) < 4);
});
