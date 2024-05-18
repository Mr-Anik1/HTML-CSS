import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "../About";

describe("About page test", () => {
  it("Should 2 heading on the About component", () => {
    render(<About />);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBe(2);
  });

  it("Should 2 paragraph on the About component", () => {
    render(<About />);
    const paragraph = screen.getAllByRole("paragraph");
    expect(paragraph.length).toBe(2);
  });
});
