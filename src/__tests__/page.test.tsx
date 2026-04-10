import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the site header with brand name", () => {
    render(<Home />);
    expect(screen.getByText("Nysha Home Healthcare")).toBeInTheDocument();
  });

  it("renders the 'Get in touch' button", () => {
    render(<Home />);
    expect(screen.getByText("Get in touch")).toBeInTheDocument();
  });

  it("renders the daisyUI info card", () => {
    render(<Home />);
    expect(screen.getByText("Next.js + daisyUI")).toBeInTheDocument();
  });

  it("renders links to documentation", () => {
    render(<Home />);
    expect(screen.getByText("Next.js docs")).toBeInTheDocument();
    expect(screen.getByText("Component library")).toBeInTheDocument();
  });
});
