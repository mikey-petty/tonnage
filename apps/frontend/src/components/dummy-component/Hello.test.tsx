import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello component", () => {
  it("renders greeting text", () => {
    render(<Hello name="Mikey" />);
    expect(screen.getByText(/hello mikey/i)).toBeInTheDocument();
  });
});
