import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "./app/page";

describe("Login Page", () => {
  it("renders login title", () => {
    render(<Page />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders email and password fields", () => {
    render(<Page />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("allows typing in email input", async () => {
    render(<Page />);
    const emailInput = screen.getByLabelText(/email/i);

    await userEvent.type(emailInput, "test@example.com");

    expect(emailInput).toHaveValue("test@example.com");
  });
});