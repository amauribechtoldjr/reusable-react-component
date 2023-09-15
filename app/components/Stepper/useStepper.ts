import { useReducer, useState } from "react";
import type { StepperProps } from ".";
import { callAll } from "~/utils/js";

enum StepsActions {
  "next",
  "previous",
  "loading",
}

type ReducerAction = {
  type: StepsActions;
};

interface StepsState<T> {
  startStep?: T;
  activeStep: number;
  isLoading: boolean;
  steps: T[];
}

const initialState = <T>({
  startStep,
  steps,
}: {
  startStep?: T;
  steps: T[];
}): StepsState<T> => {
  return {
    startStep: startStep ?? undefined,
    activeStep: 0,
    isLoading: false,
    steps,
  };
};

type ReducerFn = <T>(
  state: StepsState<T>,
  action: ReducerAction
) => StepsState<T>;

const reducer: ReducerFn = (state, action) => {
  switch (action.type) {
    case StepsActions.next: {
      console.log(state);
      if (state.activeStep === state.steps.length - 1) {
        return { ...state };
      }
      return { ...state, activeStep: state.activeStep + 1 };
    }
    case StepsActions.previous: {
      return { ...state, activeStep: state.activeStep - 1 };
    }
    case StepsActions.loading: {
      return { ...state, isLoading: !state.isLoading };
    }
    default: {
      throw new Error("No valid action for the Steps reducer");
    }
  }
};

interface UseStepperProps<T> {
  steps: T[];
  startStep?: T;
  onNextStep?: (currentStep: T) => Promise<boolean>;
}

const createInitialState = <T>({ ...args }: StepsState<T>): StepsState<T> => {
  return {
    ...args,
  };
};

const useStepper = <T>({
  steps,
  startStep,
  onNextStep,
}: UseStepperProps<T>) => {
  const [state, dispatch] = useReducer(
    reducer<T>,
    { ...initialState<T>({ startStep, steps }) },
    createInitialState<T>
  );

  const handleNextStep = async () => {
    if (onNextStep) {
      dispatch({ type: StepsActions.loading });
      const isValid = await onNextStep(steps[state.activeStep]);
      dispatch({ type: StepsActions.loading });

      if (!isValid) return;
    }
    dispatch({ type: StepsActions.next });
  };

  const handlePreviousStep = () => {
    dispatch({ type: StepsActions.previous });
  };

  const getStepperProps: (params: Partial<StepperProps>) => StepperProps = ({
    nextStep,
    previousStep,
    "aria-label": ariaLabel,
    ...props
  }) => {
    return {
      isLoading: state.isLoading,
      activeStep: state.activeStep,
      nextStep: callAll(nextStep, handleNextStep),
      previousStep: callAll(previousStep, handlePreviousStep),
      "aria-label": ariaLabel ?? "Navegation component by steps",
      numberSteps: steps.length,
      ...props,
    };
  };

  return {
    isLoading: state.isLoading,
    activeStep: state.activeStep,
    nextStep: handleNextStep,
    previousStep: handlePreviousStep,
    getStepperProps,
  };
};

export { useStepper };
