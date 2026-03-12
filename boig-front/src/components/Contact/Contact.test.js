import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

test("renders about component", () => {
  render(<Contact />);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});
