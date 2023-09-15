import { ComponentProps } from "react";

interface StepProps extends ComponentProps<"div"> {}

export default function Step({ children, className }: StepProps) {
  return <div className={className}>{children}</div>;
}
