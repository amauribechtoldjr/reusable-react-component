import {
  renderHook,
  act,
  render,
  screen,
  user,
  waitFor,
} from "~/utils/tests/tests";
import { useStepper } from "./useStepper";
import Stepper from ".";

describe("useStepper", () => {
  it("should be in the first step by default", () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    expect(result.current.getStepperProps({})?.activeStep).toBe(0);
  });

  it("should be in the step that it's defined by 'startStep'", () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
        startStep: 1,
      },
    });

    expect(result.current.getStepperProps({})?.activeStep).toBe(1);
  });

  it("should go to nextStep correctly", async () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    await act(() => result.current.nextStep());

    expect(result.current.activeStep).toBe(1);
  });

  it("should go to previous correctly", async () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    await act(() => result.current.nextStep());

    expect(result.current.activeStep).toBe(1);

    act(() => result.current.previousStep());

    expect(result.current.activeStep).toBe(0);
  });

  it("should not set loading state when onNextStep is not defined", async () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    await act(() => result.current.nextStep());

    expect(result.current.getStepperProps({}).isLoadingNextStep).toBeFalsy();
  });

  it("should not go to nextStep if is in the last one", async () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    expect(result.current.getStepperProps({}).activeStep).toBe(0);

    await act(() => result.current.nextStep());
    await act(() => result.current.nextStep());

    expect(result.current.getStepperProps({}).activeStep).toBe(2);

    await act(() => result.current.nextStep());

    expect(result.current.getStepperProps({}).activeStep).toBe(2);
  });

  it("should not go to previousStep if is in the first one", async () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    expect(result.current.getStepperProps({}).activeStep).toBe(0);

    act(() => result.current.previousStep());

    expect(result.current.getStepperProps({}).activeStep).toBe(0);
  });

  it("should not go to previousStep if is in the first one", async () => {
    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    expect(result.current.getStepperProps({}).activeStep).toBe(0);

    act(() => result.current.previousStep());

    expect(result.current.getStepperProps({}).activeStep).toBe(0);
  });

  it("should be possible extends any getStepperProps param", async () => {
    const consoleLogMock = jest.spyOn(console, "log").mockImplementation();

    const { result } = renderHook(useStepper, {
      initialProps: {
        steps: [0, 1, 2],
      },
    });

    act(() =>
      result.current
        .getStepperProps({
          nextStep(currentStepIndex) {
            console.log(currentStepIndex);
          },
        })
        .nextStep(0)
    );

    expect(consoleLogMock).toBeCalledWith(0);
    expect(result.current.getStepperProps({}).activeStep).toBe(1);

    consoleLogMock.mockRestore();
  });

  it("should show loading state correctly with the Stepper component", async () => {
    const TestComponent = () => {
      const { getStepperProps } = useStepper({
        steps: [0, 1, 2],
        onNextStep: async () => true,
      });

      return (
        <Stepper.Root {...getStepperProps({})} data-testid="stepper-root">
          <div></div>
          <div></div>
          <div></div>
        </Stepper.Root>
      );
    };

    render(<TestComponent />);

    const nextButton = screen.getByRole("button", {
      name: /continue stepper button/i,
    });

    await waitFor(() => {
      user.click(nextButton);

      expect(
        screen.getByRole("button", {
          name: /loading stepper button/i,
        })
      ).toBeTruthy();
    });
  });
});
