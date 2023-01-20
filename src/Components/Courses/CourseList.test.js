import { screen, render } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList", () => {
  const setup = () => render(<CourseList />);

  test("has ul", () => {
    setup();
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
