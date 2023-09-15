import { useReducer, useState } from "react";
import type { StepperProps } from ".";
import { callAll } from "~/utils/js";

type Next = { type: "next" };
type Previous = { type: "previous" };
type Loading = { type: "loading" };

export type ReducerStepsActions = Next | Previous | Loading;
export interface StepsState {
  activeStep: number;
  isLoading: boolean;
  steps: string[];
  startStep?: string;
}

export const StepsReducer = (
  state: StepsState,
  action: ReducerStepsActions
) => {
  switch (action.type) {
    case "next": {
      if (state.activeStep === state.steps.length - 1) {
        return state;
      }

      return { ...state, activeStep: state.activeStep + 1 };
    }
    case "previous": {
      if (state.activeStep === 0) {
        return state;
      }

      return { ...state, activeStep: state.activeStep - 1 };
    }
    case "loading": {
      return { ...state, isLoading: !state.isLoading };
    }
    default: {
      return state;
    }
  }
};

interface UseStepperProps {
  steps: string[];
  startStep?: string;
  reducer?: (state: StepsState, action: ReducerStepsActions) => StepsState;
}

const useStepper = ({
  steps,
  startStep,
  reducer = StepsReducer,
}: UseStepperProps) => {
  const [state, dispatch] = useReducer(reducer, {
    steps,
    startStep,
    isLoading: false,
    activeStep: startStep ? steps.findIndex((step) => step === startStep) : 0,
  });

  const handleNextStep = async () => {
    dispatch({ type: "next" });
  };

  const handlePreviousStep = () => {
    dispatch({ type: "previous" });
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
