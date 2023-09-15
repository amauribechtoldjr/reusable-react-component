import { makeAutoObservable } from "mobx";
import { completeSignup, signup } from "./service";

export interface SignupContext {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class SignupStore {
  formAccount: SignupContext = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  formErrors: Partial<SignupContext> = {};

  confirmationCode: string = "";
  confirmationError: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleInputChange(type: keyof SignupContext) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      this.formAccount[type] = e.target.value;
      this.formErrors[type] = undefined;
    };
  }

  async handleFormAccountSubmit() {
    try {
      const signupResponse = await signup({
        ...this.formAccount,
      });

      return signupResponse !== null;
    } catch (error) {
      this.formErrors = {
        firstName: this.formalizeErrors("firstName"),
        lastName: this.formalizeErrors("lastName"),
        email: this.formalizeErrors("email"),
        password: this.formalizeErrors("password"),
      };

      return false;
    }
  }

  async handleConfirmationCodeSubmit() {
    try {
      const signupResponse = await completeSignup({
        challengeToken: this.confirmationCode,
        otp: this.formAccount,
      });

      return signupResponse.status === "success";
    } catch (error: any) {
      this.confirmationError = String(error?.message || "Unexpected error");

      return false;
    }
  }

  formalizeErrors(type: keyof SignupContext) {
    return !this.formAccount[type] ? `Field ${type} is required.` : "";
  }

  resetFormAccount() {
    this.formAccount = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.formErrors = {};
  }
}

const store = new SignupStore();

export default store;
