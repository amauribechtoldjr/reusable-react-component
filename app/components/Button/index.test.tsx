import { Button } from "./index";
import { render, screen, user } from "~/utils/tests/tests";

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button>test</Button>);

    const button = screen.getByRole("button", { name: /test/i });

    expect(button).toBeTruthy();
  });

  it("should render secondary variant", () => {
    render(<Button variant={"secondary"}>test</Button>);

    const button = screen.getByRole("button", { name: /test/i });

    expect(button).toBeTruthy();
    expect(button.className).toContain("border-gray-400");
  });

  it("should call onClick correctly", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>test</Button>);

    const button = screen.getByRole("button", { name: /test/i });
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should have default aria-label", async () => {
    render(<Button>test</Button>);

    const button = screen.getByLabelText(/test button/i);

    expect(button).toBeTruthy();
  });
});
