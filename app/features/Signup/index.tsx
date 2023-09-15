import ServiceTermsStep from "./ServiceTermsStep";
import FormAccountStep from "./FormAccountStep";
import { useSteps } from "~/components/Steps/useSteps";
import Steps from "~/components/Steps";
import store from "./store";
import ConfirmationStep from "./ConfirmationStep";
import { useNavigate } from "@remix-run/react";

// import { SignupStepsReducer } from "./reducer";

const stepsTypes = {
  serviceTerms: "serviceTerms",
  formAccount: "formAccount",
  confirmation: "confirmation",
};

const steps = Object.keys(stepsTypes);

const SignupStepsFeature = () => {
  const navigate = useNavigate();

  const stepsValidation = {
    [stepsTypes.serviceTerms]: async () => true,
    [stepsTypes.formAccount]: async () => await store.handleFormAccountSubmit(),
    [stepsTypes.confirmation]: async () => {
      const completeSignupResponse = await store.handleConfirmationCodeSubmit();

      if (completeSignupResponse) {
        navigate("/welcome");
      }

      return false;
    },
  };

  const { getStepsProps } = useSteps({
    steps,
    validate: async (activeStep: string) => {
      try {
        const validation = await stepsValidation[activeStep]();
        return validation;
      } catch (error) {
        return false;
      }
    },

    // reducer: SignupStepsReducer,
    // Add a reducer if you want to add your own behaviors
  });

  return (
    <Steps.Root
      className="bg-white w-full m-8 md:max-w-min"
      {...getStepsProps({})}
    >
      <Steps.Step className="md:min-w-[500px]">
        <ServiceTermsStep />
      </Steps.Step>
      <Steps.Step className="md:min-w-[500px]">
        <FormAccountStep />
      </Steps.Step>
      <Steps.Step className="w-80">
        <ConfirmationStep />
      </Steps.Step>
    </Steps.Root>
  );
};

export default SignupStepsFeature;
