import Step from "./Step";
import { Button } from "~/components/Button";
import { ComponentProps, FC } from "react";
import { Dot } from "~/components/Dot";

export interface StepsProps extends ComponentProps<"div"> {
  isLoading: boolean;
  numberSteps: number;
  onNext: (activeStep: number) => void;
  onPrevious: (activeStep: number) => void;
  activeStep: number;
}

function createDots(numberSteps: number, currentStep: number) {
  const dots = [];

  for (let i = 0; i < numberSteps; i++) {
    dots.push(
      <Dot key={i} variant={currentStep < i ? "inactive" : "active"} />
    );
  }

  return dots;
}

const Steps: FC<StepsProps> = ({
  children,
  className,
  onNext,
  onPrevious,
  isLoading,
  activeStep,
  numberSteps,
  ...props
}) => {
  if (
    !children ||
    !Array.isArray(children) ||
    children.length !== numberSteps
  ) {
    throw new Error("Steps must have childs equal to numberSteps");
  }

  const selectedStepComponent = children[activeStep];

  return (
    <div className={className} {...props}>
      <div className="inline-flex items-center p-8">
        <span className="inline mr-8">
          Step {activeStep + 1} of {children.length}
        </span>
        <div className="inline-flex items-center">
          {createDots(numberSteps, activeStep)}
        </div>
      </div>
      <div className="p-8">{selectedStepComponent}</div>
      <div className="flex flex-row items-center h-24 w-full bg-white border-t">
        {activeStep > 0 && (
          <Button
            onClick={() => onPrevious(activeStep)}
            className="ml-8 mr-2 md:m-8"
            variant={"secondary"}
            aria-label="Previous steps button"
          >
            Back
          </Button>
        )}
        <Button
          className="mr-8 ml-2 ml-auto md:m-8 md:ml-auto"
          onClick={() => onNext(activeStep)}
          disabled={isLoading}
          aria-label={
            isLoading ? "Loading steps button" : "Continue steps button"
          }
        >
          {isLoading ? "Loading" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default {
  Root: Steps,
  Step,
};
