import { render, screen, waitFor } from "@testing-library/react";
import BackendMessage from "./BackendMessage";
import { vi } from "vitest";

describe("BackendMessage component", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it("renders backend message when API call succeeds", async () => {
    // Mock successful API response
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Hello from Django!" }),
      })
    ) as any;

    render(<BackendMessage />);

    // Wait for the async API call to complete
    await waitFor(() => {
      expect(screen.getByText("Hello from Django!")).toBeInTheDocument();
    });

    // Verify fetch was called correctly
    expect(fetch).toHaveBeenCalledWith("/api/hello");
  });
});
