import Stepper from "./";
import { render, screen, user } from "~/utils/tests/tests";

describe("<Stepper />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    render(
      <Stepper.Root
        activeStep={0}
        isLoadingNextStep={false}
        nextStep={() => {}}
        numberSteps={3}
        previousStep={() => {}}
        data-testid="stepper-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Stepper.Root>
    );

    const stepper = screen.getByTestId(/stepper-root/i);

    expect(stepper).toBeTruthy();
  });

  it("should not render when children.lenght is different from numberSteps", () => {
    jest.spyOn(global.console, "error").mockImplementation(() => {});

    try {
      render(
        <Stepper.Root
          activeStep={0}
          isLoadingNextStep={false}
          nextStep={() => {}}
          numberSteps={3}
          previousStep={() => {}}
          data-testid="stepper-root"
        >
          <div></div>
          <div></div>
        </Stepper.Root>
      );

      expect(true).toBe(false); // should not reach this line
    } catch (e: any) {
      expect(e?.message).toBe("Stepper must have childs equal to numberSteps");
    }
  });

  it("should call next step correctly", async () => {
    const nextStep = jest.fn();

    render(
      <Stepper.Root
        activeStep={0}
        isLoadingNextStep={false}
        nextStep={nextStep}
        numberSteps={3}
        previousStep={() => {}}
        data-testid="stepper-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Stepper.Root>
    );

    const stepper = screen.getByTestId(/stepper-root/i);
    const nextButton = screen.getByRole("button", { name: /continue/i });

    await user.click(nextButton);

    expect(stepper).toBeTruthy();
    expect(nextStep).toHaveBeenCalledTimes(1);
  });

  it("should call previous step correctly", async () => {
    const previousStepFn = jest.fn();

    render(
      <Stepper.Root
        activeStep={1}
        isLoadingNextStep={false}
        nextStep={() => {}}
        numberSteps={3}
        previousStep={previousStepFn}
        data-testid="stepper-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Stepper.Root>
    );

    const stepper = screen.getByTestId(/stepper-root/i);
    const previousStepbutton = screen.getByText(/back/i);

    await user.click(previousStepbutton);

    expect(stepper).toBeTruthy();
    expect(previousStepFn).toHaveBeenCalledTimes(1);
  });

  it("should show loading state correctly", async () => {
    render(
      <Stepper.Root
        activeStep={1}
        isLoadingNextStep={true}
        nextStep={() => {}}
        numberSteps={3}
        previousStep={() => {}}
        data-testid="stepper-root"
      >
        <div></div>
        <div></div>
        <div></div>
      </Stepper.Root>
    );

    const nextButton = screen.getByRole("button", {
      name: /loading stepper button/i,
    });

    expect(nextButton).toBeTruthy();
  });
});
