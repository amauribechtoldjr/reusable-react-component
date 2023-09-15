import { useReducer } from "react";
import type { StepsProps } from ".";
import { callAll } from "~/utils/js";

type Next = { type: "next" };
type Previous = { type: "previous" };
type Loading = { type: "loading"; value: boolean };

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
      return { ...state, isLoading: action.value };
    }
    default: {
      return state;
    }
  }
};

interface UseStepsProps {
  steps: string[];
  startStep?: string;
  reducer?: (state: StepsState, action: ReducerStepsActions) => StepsState;
  validate?: (activeStep: string) => Promise<boolean>;
}

const useSteps = ({
  steps,
  startStep,
  reducer = StepsReducer,
  validate,
}: UseStepsProps) => {
  const [state, dispatch] = useReducer(reducer, {
    steps,
    startStep,
    isLoading: false,
    activeStep: startStep ? steps.findIndex((step) => step === startStep) : 0,
  });

  const handleOnNext = async () => {
    if (validate) {
      dispatch({ type: "loading", value: true });

      const isValid = await validate(steps[state.activeStep]);

      dispatch({ type: "loading", value: false });

      if (!isValid) {
        return;
      }
    }
    dispatch({ type: "next" });
  };

  const handleOnPrevious = () => {
    dispatch({ type: "previous" });
  };

  const getStepsProps: (params: Partial<StepsProps>) => StepsProps = ({
    onNext,
    onPrevious,
    "aria-label": ariaLabel,
    ...props
  }) => {
    return {
      isLoading: state.isLoading,
      activeStep: state.activeStep,
      onNext: callAll(handleOnNext, onNext),
      onPrevious: callAll(handleOnPrevious, onPrevious),
      "aria-label": ariaLabel ?? "Navegation component by steps",
      numberSteps: steps.length,
      ...props,
    };
  };

  return {
    isLoading: state.isLoading,
    activeStep: state.activeStep,
    onNext: handleOnNext,
    onPrevious: handleOnPrevious,
    getStepsProps,
  };
};

export { useSteps };
