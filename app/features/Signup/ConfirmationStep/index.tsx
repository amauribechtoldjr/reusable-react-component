import { Input } from "~/components/Input";
import store from "../store";
import { observer } from "mobx-react";
import { ChangeEvent, useEffect } from "react";

function ConfirmationStep() {
  useEffect(() => {
    store.confirmationCode = "";
    store.confirmationError = "";
  }, []);

  const handleUpdateChallengeToken = (e: ChangeEvent<HTMLInputElement>) => {
    store.confirmationError = "";
    store.confirmationCode = e.target.value;
  };

  return (
    <div>
      <h2 className="font-bold mb-8">Confirm your email</h2>
      <p className="inline">Please entre the one-time passcode sent to </p>
      <span className="font-bold">{store.formAccount.email}</span>
      <Input
        type="text"
        name="confirmationCode"
        className="mt-6 w-full"
        placeholder="E.g. 123456"
        labelClassName="w-full"
        value={store.confirmationCode}
        onChange={handleUpdateChallengeToken}
        error={store.confirmationError}
        variant={store.confirmationError ? "error" : "default"}
      />
      {store.confirmationError && (
        <span className="text-sm text-error mt-2">
          {store.confirmationError}
        </span>
      )}
    </div>
  );
}

export default observer(ConfirmationStep);
