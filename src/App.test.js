import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Routing", () => {
  const setup = () => render(<App />);

  test.each`
    path           | pageTestId
    ${"/"}         | ${"publicPage"}
    ${"/teachers"} | ${"teachersPage"}
    ${"/courses"}  | ${"coursesPage"}
  `("display $pageTestId when path is $path", ({ path, pageTestId }) => {
    window.history.pushState({}, "", path);
    setup();
    const page = screen.queryByTestId(pageTestId);

    expect(page).toBeInTheDocument();
  });

  test("has navigation bar", () => {
    setup();
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
  });
});
