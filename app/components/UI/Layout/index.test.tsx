import Layout from "./index";
import { render, screen } from "~/utils/tests/tests";

describe("<Layout />", () => {
  it("should render component with children correctly", () => {
    render(
      <Layout>
        <div data-testid="layout-test-div" />
      </Layout>
    );

    const layoutDiv = screen.getByTestId("layout-test-div");
    expect(layoutDiv).toBeTruthy();
  });
});
