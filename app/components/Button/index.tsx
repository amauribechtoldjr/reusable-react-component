import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, Children, FC, forwardRef } from "react";
import { cn } from "~/utils/styles";

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
}

const buttonVariants = cva("px-8 h-10 rounded-md select-none", {
  variants: {
    variant: {
      default: "bg-purple-600 text-white",
      secondary: "text-black border-2 border-gray-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        aria-label={`${Children.toArray(props.children).join(" ")} button`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
