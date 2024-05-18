import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../Contact";

describe("Contact Page", () => {
  it("should heading inside Contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
