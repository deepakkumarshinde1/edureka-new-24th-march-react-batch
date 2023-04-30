import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("check for header text", () => {
  render(<Header text="Text1" text1="Text2" />);
  const linkElement = screen.getByRole("heading", { name: "Text1 Text2" });
  expect(linkElement).toContainHTML("h1");
});

// it("check for header text", () => {
//   render(<Header text="Text1" text1="Text2" />);
//   const linkElement = screen.getByTitle("my-text");
//   expect(linkElement).toBeInTheDocument();
// });

// it("check for header text", () => {
//   render(<Header text="Text1" text1="Text2" />);
//   const element = screen.getByTestId("my-test-id");
//   //   expect(element.textContent).toBe("Hello to edureka");
//   //   expect(element).toHaveTextContent("Hello to edureka");
//   expect(element).not.toBeVisible();
// });
