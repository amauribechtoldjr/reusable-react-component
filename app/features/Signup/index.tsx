import ServiceTermsStep from "./ServiceTermsStep";
import FormAccountStep from "./FormAccountStep";
import { useStepper } from "~/components/Stepper/useStepper";
import Stepper from "~/components/Stepper";
// import store from "./store";
import ConfirmationStep from "./ConfirmationStep";
// import { useNavigate } from "@remix-run/react";
import { SignupStepsReducer } from "./reducer";

export enum SignupSteps {
  serviceTerms = "serviceTerms",
  formAccount = "formAccount",
  confirmation = "confirmation",
}

const steps = Object.keys(SignupSteps) as SignupSteps[];

// const stepsValidation = {
//   [SignupSteps.serviceTerms]: async () => true,
//   [SignupSteps.formAccount]: async () =>
//     await store.handleFormAccountSubmit(),
//   [SignupSteps.confirmation]: async () => {
//     const completeSignupResponse = await store.handleConfirmationCodeSubmit();

//     if (completeSignupResponse) {
//       navigate("/welcome");
//     }

//     return false;
//   },
// };

const SignupStepper = () => {
  // const navigate = useNavigate();

  const { getStepperProps } = useStepper({
    steps,
    reducer: SignupStepsReducer,
  });

  return (
    <Stepper.Root
      className="bg-white w-full m-8 md:max-w-min"
      {...getStepperProps({
        nextStep(activeStep) {
          console.log(steps[activeStep]);
        },
      })}
    >
      <Stepper.Step className="md:min-w-[500px]">
        <ServiceTermsStep />
      </Stepper.Step>
      <Stepper.Step className="md:min-w-[500px]">
        <FormAccountStep />
      </Stepper.Step>
      <Stepper.Step className="w-80">
        <ConfirmationStep />
      </Stepper.Step>
    </Stepper.Root>
  );
};

export default SignupStepper;
