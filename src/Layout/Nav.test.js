import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Navigation", () => {
  const setUp = () => render(<Nav />, {wrapper: MemoryRouter});

  test("should have 3 link", async () => {
    setUp();
    const links = await screen.findAllByRole("link");

    expect(links).toHaveLength(3);  
  })
  test("should have title", () => {
    
  })
})