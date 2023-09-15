import {
  ReducerStepsActions,
  StepsState,
  StepsReducer,
} from "~/components/Stepper/useStepper";
import { SignupSteps } from ".";

export const SignupStepsReducer = (
  state: StepsState,
  action: ReducerStepsActions
) => {
  if (action.type === "next") {
    if (state.activeStep === state.steps.length - 1) {
      return { ...state };
    }

    if (state.steps[state.activeStep] === SignupSteps.formAccount)
      return { ...state };

    return { ...state, activeStep: state.activeStep + 1 };
  }

  return StepsReducer(state, action);
};
