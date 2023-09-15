import Steps from ".";
import { render, screen, user } from "~/utils/tests/tests";

describe("<Steps />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    render(
      <Steps.Root
        activeStep={0}
        isLoading={false}
        nextStep={() => {}}
        numberSteps={3}
        previousStep={() => {}}
        data-testid="steps-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Steps.Root>
    );

    const steps = screen.getByTestId(/steps-root/i);

    expect(steps).toBeTruthy();
  });

  it("should not render when children.lenght is different from numberSteps", () => {
    jest.spyOn(global.console, "error").mockImplementation(() => {});

    try {
      render(
        <Steps.Root
          activeStep={0}
          isLoading={false}
          nextStep={() => {}}
          numberSteps={3}
          previousStep={() => {}}
          data-testid="steps-root"
        >
          <div></div>
          <div></div>
        </Steps.Root>
      );

      expect(true).toBe(false); // should not reach this line
    } catch (e: any) {
      expect(e?.message).toBe("steps must have childs equal to numberSteps");
    }
  });

  it("should call next step correctly", async () => {
    const nextStep = jest.fn();

    render(
      <Steps.Root
        activeStep={0}
        isLoading={false}
        nextStep={nextStep}
        numberSteps={3}
        previousStep={() => {}}
        data-testid="steps-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Steps.Root>
    );

    const steps = screen.getByTestId(/steps-root/i);
    const nextButton = screen.getByRole("button", { name: /continue/i });

    await user.click(nextButton);

    expect(steps).toBeTruthy();
    expect(nextStep).toHaveBeenCalledTimes(1);
  });

  it("should call previous step correctly", async () => {
    const previousStepFn = jest.fn();

    render(
      <Steps.Root
        activeStep={1}
        isLoading={false}
        nextStep={() => {}}
        numberSteps={3}
        previousStep={previousStepFn}
        data-testid="steps-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Steps.Root>
    );

    const steps = screen.getByTestId(/steps-root/i);
    const previousStepbutton = screen.getByText(/back/i);

    await user.click(previousStepbutton);

    expect(steps).toBeTruthy();
    expect(previousStepFn).toHaveBeenCalledTimes(1);
  });

  it("should show loading state correctly", async () => {
    render(
      <Steps.Root
        activeStep={1}
        isLoading={true}
        nextStep={() => {}}
        numberSteps={3}
        previousStep={() => {}}
        data-testid="steps-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Steps.Root>
    );

    const nextButton = screen.getByRole("button", {
      name: /loading steps button/i,
    });

    expect(nextButton).toBeTruthy();
  });
});
