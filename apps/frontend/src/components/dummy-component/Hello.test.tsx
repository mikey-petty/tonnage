import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HelloHeader from "./HelloHeader";
import HelloButton from "./HelloButton";

describe("Hello component", () => {
  it("renders greeting text", () => {
    render(<HelloHeader name="Mikey" />);
    expect(screen.getByText(/hello mikey/i)).toBeInTheDocument();
  });
});

test("calls onClick when a button is clicked", async () => {
  const handleClick = vi.fn();
  render(<HelloButton onClick={handleClick} />);

  await userEvent.click(screen.getByRole("button", { name: /hello button!/i }));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
