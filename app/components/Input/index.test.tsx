import { Input } from "./index";
import { act, render, screen, user } from "~/utils/tests/tests";

describe("<Input />", () => {
  it("should render correctly", () => {
    render(<Input name="test" label="test" />);

    const input = screen.getByRole("textbox", { name: /test/i });

    expect(input).toBeTruthy();
  });

  it("should render error variant correctly", () => {
    render(<Input name="test" label="test" variant="error" />);

    const input = screen.getByRole("textbox", { name: /test/i });

    expect(input).toBeTruthy();
    expect(input.className).toContain("border-error");
  });

  it("should not render label", () => {
    render(<Input name="test" data-testid="test" />);
    const input = screen.getByTestId("test");

    expect(input).toBeTruthy();
    expect(screen.queryByText(/test/i)).toBeNull();
  });

  it("should render aria-error when variant error", () => {
    render(
      <Input
        name="test"
        data-testid="test"
        variant="error"
        error="aria-error-test"
        label="test"
      />
    );
    const input = screen.getByRole("textbox", { name: /test/i });

    expect(input).toBeTruthy();
    expect(input.getAttribute("aria-errormessage")).toBe("aria-error-test");
  });

  it("should render eye icon to show/hide password", async () => {
    render(
      <Input
        name="test"
        data-testid="test"
        variant="error"
        error="aria-error-test"
        label="test"
        passwordControl
      />
    );

    const showPasswordIcon = screen.getByTestId("show-password");

    expect(showPasswordIcon).toBeTruthy();

    await act(() => user.click(showPasswordIcon));

    const hidePassword = screen.getByTestId("hide-password");

    expect(hidePassword).toBeTruthy();
  });
});
