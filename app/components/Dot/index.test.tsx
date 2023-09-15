import { Dot } from "./index";
import { render, screen } from "~/utils/tests/tests";

describe("<Dot />", () => {
  it("should render active correctly", () => {
    render(<Dot variant={"active"}>test</Dot>);

    const dot = screen.getByTestId("steps-dot");

    expect(dot).toBeTruthy();
    expect(dot.className).toContain("bg-purple-600");
  });

  it("should render inactive correctly", () => {
    render(<Dot variant={"inactive"}>test</Dot>);

    const dot = screen.getByTestId("steps-dot");

    expect(dot).toBeTruthy();
    expect(dot.className).toContain("bg-gray-300");
  });
});
