import { screen, render } from "@testing-library/react";
import Courses from "./Courses";

describe("courses", () => {
  const setup = () => render(<Courses />);

  test("Check if button with correct text exists", () => {
    setup();
    const btn = screen.getByRole("button", {
      name: "Add Course",
    });
    expect(btn).toBeInTheDocument();
  });
});
