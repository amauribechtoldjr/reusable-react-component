import Step from "./index";
import { render, screen } from "~/utils/tests/tests";

describe("<Step />", () => {
  it("should render active correctly", () => {
    render(<Step>test</Step>);

    const dot = screen.getByText("test");

    expect(dot).toBeTruthy();
  });
});
