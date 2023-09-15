import { Input } from "~/components/Input";
import { useEffect } from "react";
import store from "../store";
import { observer } from "mobx-react";
import { cn } from "~/utils/styles";

const inputLabelClassName = "w-full py-2 m-0 md:mb-4 md:w-1/2 md:inline-block";
const pairInputClassName = "md:pl-2";
const oddInputClassName = "md:pr-2";

function FormAccountStep() {
  useEffect(() => {
    // store.resetFormAccount();

    return () => {
      // store.resetFormAccount();
    };
  }, []);

  return (
    <div>
      <h2 className="font-bold mb-8">Let's set up your account</h2>
      <div className="flex flex-col md:block">
        <Input
          variant={store.formErrors.firstName ? "error" : "default"}
          error={store.formErrors.firstName}
          label="First name *"
          placeholder="E.g. John"
          name="firstName"
          id="firstName"
          labelClassName={cn(inputLabelClassName, oddInputClassName)}
          value={store.formAccount.firstName}
          onChange={store.handleInputChange("firstName")}
        />
        <Input
          variant={store.formErrors.email ? "error" : "default"}
          error={store.formErrors.email}
          label="Email *"
          placeholder="E.g. john.smith@example.com"
          name="email"
          id="email"
          labelClassName={cn(inputLabelClassName, pairInputClassName)}
          value={store.formAccount.email}
          onChange={store.handleInputChange("email")}
        />
        <Input
          variant={store.formErrors.lastName ? "error" : "default"}
          error={store.formErrors.lastName}
          label="Last name *"
          placeholder="E.g. Smith"
          name="lastName"
          id="lastName"
          labelClassName={cn(inputLabelClassName, oddInputClassName)}
          value={store.formAccount.lastName}
          onChange={store.handleInputChange("lastName")}
        />
        <Input
          variant={store.formErrors.password ? "error" : "default"}
          error={store.formErrors.password}
          type="password"
          label="Password *"
          name="password"
          id="password"
          labelClassName={cn(inputLabelClassName, pairInputClassName)}
          value={store.formAccount.password}
          onChange={store.handleInputChange("password")}
          passwordControl
        />
      </div>
    </div>
  );
}

export default observer(FormAccountStep);
