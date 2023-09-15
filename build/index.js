var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/home/amauribech/dev/estudos/reusable-component-strategy/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/home/amauribech/dev/estudos/reusable-component-strategy/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KANTCXTY.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [{ rel: "stylesheet", href: tailwind_default }]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "text-sm md:text-base", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/welcome.tsx
var welcome_exports = {};
__export(welcome_exports, {
  default: () => welcome_default,
  meta: () => meta
});

// app/components/UI/Layout/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-screen bg-gray-50 flex items-center justify-center", children }, void 0, !1, {
    fileName: "app/components/UI/Layout/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/Button/index.tsx
var import_class_variance_authority = require("class-variance-authority"), import_react3 = require("react");

// app/utils/styles.ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/components/Button/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)("px-8 h-10 rounded-md select-none", {
  variants: {
    variant: {
      default: "bg-purple-600 text-white",
      secondary: "text-black border-2 border-gray-400"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Button = (0, import_react3.forwardRef)(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      ref,
      className: cn(buttonVariants({ variant, className })),
      "aria-label": `${import_react3.Children.toArray(props.children).join(" ")} button`,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/Button/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/routes/welcome.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => [{ title: "FE - Welcome" }], Welcome = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col my-16 px-8 gap-16 max-w-full md:gap-8 md:flex-row md:max-w-6xl", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "font-bold my-10 leading-11 text-4xl md:text-6xl", children: "Congratulations! Your Account is Ready" }, void 0, !1, {
    fileName: "app/routes/welcome.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/welcome.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 bg-white rounded-lg p-4 flex items-center justify-center flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl mt-4 font-bold text-center", children: "Thank you for joining the company!" }, void 0, !1, {
      fileName: "app/routes/welcome.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-4 text-center", children: "You're ready to jump into an amazing finantial life journey with us." }, void 0, !1, {
      fileName: "app/routes/welcome.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Button,
      {
        className: "mt-4",
        onClick: () => console.log("get started clicked"),
        "aria-label": "Get started button",
        children: "Get started"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/welcome.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/welcome.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/welcome.tsx",
  lineNumber: 12,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/welcome.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this), welcome_default = Welcome;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});

// app/features/Signup/ServiceTermsStep/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), titleClasses = "font-bold mb-8";
function ServiceTermsStep() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: titleClasses, children: "By continuing you accept our Terms of Service" }, void 0, !1, {
      fileName: "app/features/Signup/ServiceTermsStep/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget vulputate mauris. Mauris euismod elit tempus aliquet tristique. Aliquam eu velit lacus. In quis eros id neque mollis iaculis. Curabitur ac mi est. Phasellus et nunc lacinia, eleifend velit non, blandit urna. Duis aliquet accumsan laoreet. Mauris leo erat, auctor et libero sit amet, dictum pharetra tortor. Nulla posuere justo sed faucibus efficitur. Fusce lacinia odio quis nulla malesuada fringilla facilisis a est. Sed nisi est, mattis ut porta ac, rutrum sit amet nunc. Nulla eget nibh ultrices, auctor quam eu, molestie velit. Sed facilisis rutrum rhoncus. Aenean in felis tempor, lacinia ligula at, pharetra ex." }, void 0, !1, {
      fileName: "app/features/Signup/ServiceTermsStep/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Signup/ServiceTermsStep/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Input/index.tsx
var import_class_variance_authority2 = require("class-variance-authority"), import_react4 = require("react");
var import_ai = require("react-icons/ai"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), inputVariants = (0, import_class_variance_authority2.cva)("p-2 rounded-md border-2", {
  variants: {
    variant: {
      default: "w-full block",
      error: "w-full border-error block"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), errorLabelClassname = "text-error", defaultLabelClassName = "relative inline-block text-gray-700", Input = ({
  error,
  label,
  labelClassName,
  className,
  type = "text",
  variant = "default",
  passwordControl = !1,
  ...props
}) => {
  let [showPassword, setShowPassword] = (0, import_react4.useState)(!1), handleShowPassword = () => setShowPassword((value) => !value), getInputType = (type2) => passwordControl ? showPassword ? "text" : "password" : type2;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "label",
    {
      className: cn(defaultLabelClassName, labelClassName, {
        [errorLabelClassname]: variant === "error"
      }),
      children: [
        label,
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: getInputType(type),
              className: cn(inputVariants({ className, variant })),
              "aria-errormessage": error || void 0,
              ...props
            },
            void 0,
            !1,
            {
              fileName: "app/components/Input/index.tsx",
              lineNumber: 67,
              columnNumber: 9
            },
            this
          ),
          passwordControl && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer", children: [
            showPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_ai.AiFillEyeInvisible,
              {
                className: "h-8 w-8",
                onClick: handleShowPassword,
                "data-testid": "hide-password"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Input/index.tsx",
                lineNumber: 76,
                columnNumber: 15
              },
              this
            ),
            !showPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_ai.AiFillEye,
              {
                className: "h-8 w-8",
                onClick: handleShowPassword,
                "data-testid": "show-password"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Input/index.tsx",
                lineNumber: 83,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Input/index.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Input/index.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Input/index.tsx",
      lineNumber: 60,
      columnNumber: 5
    },
    this
  );
};

// app/features/Signup/FormAccountStep/index.tsx
var import_react5 = require("react");

// app/features/Signup/store.ts
var import_mobx = require("mobx");

// app/features/Signup/service.ts
var generateRandomToken = () => crypto.randomUUID(), delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 3e3)), signup = async ({
  firstName,
  lastName,
  email,
  password
}) => {
  if (console.log("[api-sdk] signing up...", {
    firstName,
    lastName,
    email,
    password
  }), !firstName || !lastName || !email || !password)
    throw Error("Invalid signup data");
  await delay();
  let challengeToken = generateRandomToken();
  return console.log("[api-sdk] signup started, challenge created...", challengeToken), challengeToken;
}, completeSignup = async ({
  challengeToken,
  otp
}) => {
  if (!challengeToken)
    throw Error("Challenge token is necessary for completing challenge");
  return console.log("[api-sdk] completing signup challenge...", otp), await delay(), console.log("[api-sdk] signup completed"), { status: "success" };
};

// app/features/Signup/store.ts
var SignupStore = class {
  constructor() {
    this.formAccount = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    this.formErrors = {};
    this.confirmationCode = "";
    this.confirmationError = "";
    (0, import_mobx.makeAutoObservable)(this);
  }
  handleInputChange(type) {
    return (e) => {
      this.formAccount[type] = e.target.value, this.formErrors[type] = void 0;
    };
  }
  async handleFormAccountSubmit() {
    try {
      return await signup({
        ...this.formAccount
      }) !== null;
    } catch {
      return this.formErrors = {
        firstName: this.formalizeErrors("firstName"),
        lastName: this.formalizeErrors("lastName"),
        email: this.formalizeErrors("email"),
        password: this.formalizeErrors("password")
      }, !1;
    }
  }
  async handleConfirmationCodeSubmit() {
    try {
      return (await completeSignup({
        challengeToken: this.confirmationCode,
        otp: this.formAccount
      })).status === "success";
    } catch (error) {
      return this.confirmationError = String((error == null ? void 0 : error.message) || "Unexpected error"), !1;
    }
  }
  formalizeErrors(type) {
    return this.formAccount[type] ? "" : `Field ${type} is required.`;
  }
  resetFormAccount() {
    this.formAccount = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }, this.formErrors = {};
  }
}, store = new SignupStore(), store_default = store;

// app/features/Signup/FormAccountStep/index.tsx
var import_mobx_react = require("mobx-react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), inputLabelClassName = "w-full py-2 m-0 md:mb-4 md:w-1/2 md:inline-block", pairInputClassName = "md:pl-2", oddInputClassName = "md:pr-2";
function FormAccountStep() {
  return (0, import_react5.useEffect)(() => () => {
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "font-bold mb-8", children: "Let's set up your account" }, void 0, !1, {
      fileName: "app/features/Signup/FormAccountStep/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col md:block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Input,
        {
          variant: store_default.formErrors.firstName ? "error" : "default",
          error: store_default.formErrors.firstName,
          label: "First name *",
          placeholder: "E.g. John",
          name: "firstName",
          id: "firstName",
          labelClassName: cn(inputLabelClassName, oddInputClassName),
          value: store_default.formAccount.firstName,
          onChange: store_default.handleInputChange("firstName")
        },
        void 0,
        !1,
        {
          fileName: "app/features/Signup/FormAccountStep/index.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Input,
        {
          variant: store_default.formErrors.email ? "error" : "default",
          error: store_default.formErrors.email,
          label: "Email *",
          placeholder: "E.g. john.smith@example.com",
          name: "email",
          id: "email",
          labelClassName: cn(inputLabelClassName, pairInputClassName),
          value: store_default.formAccount.email,
          onChange: store_default.handleInputChange("email")
        },
        void 0,
        !1,
        {
          fileName: "app/features/Signup/FormAccountStep/index.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Input,
        {
          variant: store_default.formErrors.lastName ? "error" : "default",
          error: store_default.formErrors.lastName,
          label: "Last name *",
          placeholder: "E.g. Smith",
          name: "lastName",
          id: "lastName",
          labelClassName: cn(inputLabelClassName, oddInputClassName),
          value: store_default.formAccount.lastName,
          onChange: store_default.handleInputChange("lastName")
        },
        void 0,
        !1,
        {
          fileName: "app/features/Signup/FormAccountStep/index.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Input,
        {
          variant: store_default.formErrors.password ? "error" : "default",
          error: store_default.formErrors.password,
          type: "password",
          label: "Password *",
          name: "password",
          id: "password",
          labelClassName: cn(inputLabelClassName, pairInputClassName),
          value: store_default.formAccount.password,
          onChange: store_default.handleInputChange("password"),
          passwordControl: !0
        },
        void 0,
        !1,
        {
          fileName: "app/features/Signup/FormAccountStep/index.tsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/features/Signup/FormAccountStep/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Signup/FormAccountStep/index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var FormAccountStep_default = (0, import_mobx_react.observer)(FormAccountStep);

// app/components/Stepper/useStepper.ts
var import_react6 = require("react");

// app/utils/js.ts
var callAll = (...fns) => (...args) => {
  fns.forEach((fn) => fn && fn(...args));
};

// app/components/Stepper/useStepper.ts
var initialState = ({
  startStep,
  steps: steps2
}) => ({
  startStep: startStep ?? void 0,
  activeStep: 0,
  isLoading: !1,
  steps: steps2
}), reducer = (state, action) => {
  switch (action.type) {
    case 0 /* next */:
      return console.log(state), state.activeStep === state.steps.length - 1 ? { ...state } : { ...state, activeStep: state.activeStep + 1 };
    case 1 /* previous */:
      return { ...state, activeStep: state.activeStep - 1 };
    case 2 /* loading */:
      return { ...state, isLoading: !state.isLoading };
    default:
      throw new Error("No valid action for the Steps reducer");
  }
}, createInitialState = ({ ...args }) => ({
  ...args
}), useStepper = ({
  steps: steps2,
  startStep,
  onNextStep
}) => {
  let [state, dispatch] = (0, import_react6.useReducer)(
    reducer,
    { ...initialState({ startStep, steps: steps2 }) },
    createInitialState
  ), handleNextStep = async () => {
    if (onNextStep) {
      dispatch({ type: 2 /* loading */ });
      let isValid = await onNextStep(steps2[state.activeStep]);
      if (dispatch({ type: 2 /* loading */ }), !isValid)
        return;
    }
    dispatch({ type: 0 /* next */ });
  }, handlePreviousStep = () => {
    dispatch({ type: 1 /* previous */ });
  }, getStepperProps = ({
    nextStep,
    previousStep,
    "aria-label": ariaLabel,
    ...props
  }) => ({
    isLoading: state.isLoading,
    activeStep: state.activeStep,
    nextStep: callAll(nextStep, handleNextStep),
    previousStep: callAll(previousStep, handlePreviousStep),
    "aria-label": ariaLabel ?? "Navegation component by steps",
    numberSteps: steps2.length,
    ...props
  });
  return {
    isLoading: state.isLoading,
    activeStep: state.activeStep,
    nextStep: handleNextStep,
    previousStep: handlePreviousStep,
    getStepperProps
  };
};

// app/components/Stepper/Step/index.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Step({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className, children }, void 0, !1, {
    fileName: "app/components/Stepper/Step/index.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

// app/components/Dot/index.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), dotVariants = (0, import_class_variance_authority3.cva)("", {
  variants: {
    variant: {
      active: "inline-block rounded-full bg-purple-600 h-4 w-4 border-4 mr-4",
      inactive: "inline-block rounded-full bg-gray-300 h-2 w-2 mr-6"
    }
  },
  defaultVariants: {
    variant: "inactive"
  }
}), Dot = ({ className, variant }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inline-block w-10 inline-flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "div",
  {
    className: cn(dotVariants({ variant, className })),
    "data-testid": "stepper-dot"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Dot/index.tsx",
    lineNumber: 24,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Dot/index.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this);

// app/components/Stepper/index.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function createDots(numberSteps, currentStep) {
  let dots = [];
  for (let i = 0; i < numberSteps; i++)
    dots.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Dot, { variant: currentStep < i ? "inactive" : "active" }, i, !1, {
        fileName: "app/components/Stepper/index.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    );
  return dots;
}
var Stepper = ({
  children,
  className,
  nextStep,
  previousStep,
  isLoading,
  activeStep,
  numberSteps,
  ...props
}) => {
  if (!children || !Array.isArray(children) || children.length !== numberSteps)
    throw new Error("Stepper must have childs equal to numberSteps");
  let selectedStepComponent = children[activeStep];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inline-flex items-center p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "inline mr-8", children: [
        "Step ",
        activeStep + 1,
        " of ",
        children.length
      ] }, void 0, !0, {
        fileName: "app/components/Stepper/index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inline-flex items-center", children: createDots(numberSteps, activeStep) }, void 0, !1, {
        fileName: "app/components/Stepper/index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Stepper/index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "p-8", children: selectedStepComponent }, void 0, !1, {
      fileName: "app/components/Stepper/index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row items-center h-24 w-full bg-white border-t", children: [
      activeStep > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        Button,
        {
          onClick: () => previousStep(activeStep),
          className: "ml-8 mr-2 md:m-8",
          variant: "secondary",
          "aria-label": "Previous stepper button",
          children: "Back"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Stepper/index.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        Button,
        {
          className: "mr-8 ml-2 ml-auto md:m-8 md:ml-auto",
          onClick: () => nextStep(activeStep),
          disabled: isLoading,
          "aria-label": isLoading ? "Loading stepper button" : "Continue stepper button",
          children: isLoading ? "Loading" : "Continue"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Stepper/index.tsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Stepper/index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Stepper/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}, Stepper_default = {
  Root: Stepper,
  Step
};

// app/features/Signup/ConfirmationStep/index.tsx
var import_mobx_react2 = require("mobx-react"), import_react7 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ConfirmationStep() {
  (0, import_react7.useEffect)(() => {
    store_default.confirmationCode = "", store_default.confirmationError = "";
  }, []);
  let handleUpdateChallengeToken = (e) => {
    store_default.confirmationError = "", store_default.confirmationCode = e.target.value;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "font-bold mb-8", children: "Confirm your email" }, void 0, !1, {
      fileName: "app/features/Signup/ConfirmationStep/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "inline", children: "Please entre the one-time passcode sent to " }, void 0, !1, {
      fileName: "app/features/Signup/ConfirmationStep/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "font-bold", children: store_default.formAccount.email }, void 0, !1, {
      fileName: "app/features/Signup/ConfirmationStep/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      Input,
      {
        type: "text",
        name: "confirmationCode",
        className: "mt-6 w-full",
        placeholder: "E.g. 123456",
        labelClassName: "w-full",
        value: store_default.confirmationCode,
        onChange: handleUpdateChallengeToken,
        error: store_default.confirmationError,
        variant: store_default.confirmationError ? "error" : "default"
      },
      void 0,
      !1,
      {
        fileName: "app/features/Signup/ConfirmationStep/index.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    ),
    store_default.confirmationError && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-sm text-error mt-2", children: store_default.confirmationError }, void 0, !1, {
      fileName: "app/features/Signup/ConfirmationStep/index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Signup/ConfirmationStep/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var ConfirmationStep_default = (0, import_mobx_react2.observer)(ConfirmationStep);

// app/features/Signup/index.tsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), SignupSteps = /* @__PURE__ */ ((SignupSteps2) => (SignupSteps2.serviceTerms = "serviceTerms", SignupSteps2.formAccount = "formAccount", SignupSteps2.confirmation = "confirmation", SignupSteps2))(SignupSteps || {}), steps = Object.keys(SignupSteps), SignupStepper = () => {
  let navigate = (0, import_react8.useNavigate)(), stepsValidation = {
    ["serviceTerms" /* serviceTerms */]: async () => !0,
    ["formAccount" /* formAccount */]: async () => await store_default.handleFormAccountSubmit(),
    ["confirmation" /* confirmation */]: async () => (await store_default.handleConfirmationCodeSubmit() && navigate("/welcome"), !1)
  }, { getStepperProps } = useStepper({
    startStep: "confirmation" /* confirmation */,
    steps,
    onNextStep: async (currentStep) => stepsValidation[currentStep]()
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    Stepper_default.Root,
    {
      className: "bg-white w-full m-8 md:max-w-min",
      ...getStepperProps({
        nextStep(activeStep) {
          console.log(steps[activeStep]);
        }
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Stepper_default.Step, { className: "md:min-w-[500px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ServiceTermsStep, {}, void 0, !1, {
          fileName: "app/features/Signup/index.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/features/Signup/index.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Stepper_default.Step, { className: "md:min-w-[500px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FormAccountStep_default, {}, void 0, !1, {
          fileName: "app/features/Signup/index.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/features/Signup/index.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Stepper_default.Step, { className: "w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ConfirmationStep_default, {}, void 0, !1, {
          fileName: "app/features/Signup/index.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/features/Signup/index.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/features/Signup/index.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
}, Signup_default = SignupStepper;

// app/routes/_index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "FE - Amauri Junior" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center flex-col justify-center h-full relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Signup_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-O5AK5KBR.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-2BTLULYS.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-EZKCA2DC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IKGOI46H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-J6HFVVF3.js", imports: ["/build/_shared/chunk-65BMFJ2J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/welcome": { id: "routes/welcome", parentId: "root", path: "welcome", index: void 0, caseSensitive: void 0, module: "/build/routes/welcome-JOCSRU3Z.js", imports: ["/build/_shared/chunk-65BMFJ2J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "1570fcb1", hmr: { runtime: "/build/_shared/chunk-EZKCA2DC.js", timestamp: 1694780794308 }, url: "/build/manifest-1570FCB1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/welcome": {
    id: "routes/welcome",
    parentId: "root",
    path: "welcome",
    index: void 0,
    caseSensitive: void 0,
    module: welcome_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
