import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, FC } from "react";
import { cn } from "~/utils/styles";

const dotVariants = cva("", {
  variants: {
    variant: {
      active: "inline-block rounded-full bg-purple-600 h-4 w-4 border-4 mr-4",
      inactive: "inline-block rounded-full bg-gray-300 h-2 w-2 mr-6",
    },
  },
  defaultVariants: {
    variant: "inactive",
  },
});

interface DotProps
  extends ComponentProps<"div">,
    VariantProps<typeof dotVariants> {}

const Dot: FC<DotProps> = ({ className, variant }) => {
  return (
    <div className="inline-block w-10 inline-flex items-center">
      <div
        className={cn(dotVariants({ variant, className }))}
        data-testid="steps-dot"
      />
    </div>
  );
};

export { Dot, dotVariants };
