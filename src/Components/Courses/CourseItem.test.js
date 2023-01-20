import { screen, render } from "@testing-library/react";
import CourseItem from "./CourseItem";

const mockCourse = {
  title: "b",
  courseNumber: "2",
  length: "3 mån",
  start: "04/04",
};

describe("CourseItem", () => {
  const setup = () => render(<CourseItem courseData={mockCourse} />);

  test("has correct heading", () => {
    setup();
    const heading = screen.getByRole("heading", {
      name: mockCourse.title,
    });

    expect(heading).toBeInTheDocument();
  });
  test("has correct course number", () => {
    setup();
    const courseNumber = screen.getByText(mockCourse.courseNumber);

    expect(courseNumber).toBeInTheDocument();
  });
  test("has correct course length", () => {
    setup();
    const courseLength = screen.getByText(mockCourse.length);

    expect(courseLength).toBeInTheDocument();
  });
  test("has correct start date", () => {
    setup();
    const startDate = screen.getByText(mockCourse.start);

    expect(startDate).toBeInTheDocument();
  });
});
