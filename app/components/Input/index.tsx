import { VariantProps, cva } from "class-variance-authority";
import {
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from "react";
import { cn } from "~/utils/styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const inputVariants = cva("p-2 rounded-md border-2", {
  variants: {
    variant: {
      default: "w-full block",
      error: "w-full border-error block",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const errorLabelClassname = "text-error";
const defaultLabelClassName = "relative inline-block text-gray-700";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  labelClassName?: string;

  passwordControl?: boolean;

  error?: string;
}

const Input: FC<InputProps> = ({
  error,
  label,
  labelClassName,
  className,
  type = "text",
  variant = "default",
  passwordControl = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((value) => !value);

  const getInputType = (type: HTMLInputTypeAttribute) => {
    if (passwordControl) {
      return showPassword ? "text" : "password";
    }

    return type;
  };

  return (
    <label
      className={cn(defaultLabelClassName, labelClassName, {
        [errorLabelClassname]: variant === "error",
      })}
    >
      {label}
      <div className="relative w-full">
        <input
          type={getInputType(type)}
          className={cn(inputVariants({ className, variant }))}
          aria-errormessage={error ? error : undefined}
          {...props}
        />
        {passwordControl && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
            {showPassword && (
              <AiFillEyeInvisible
                className="h-8 w-8"
                onClick={handleShowPassword}
                data-testid="hide-password"
              />
            )}
            {!showPassword && (
              <AiFillEye
                className="h-8 w-8"
                onClick={handleShowPassword}
                data-testid="show-password"
              />
            )}
          </div>
        )}
      </div>
    </label>
  );
};
export { Input, inputVariants };
