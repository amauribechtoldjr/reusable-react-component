import {
  Button,
  Layout
} from "/build/_shared/chunk-65BMFJ2J.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EZKCA2DC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/welcome.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/welcome.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/welcome.tsx"
  );
  import.meta.hot.lastModified = "1694697095648.582";
}
var meta = () => {
  return [{
    title: "FE - Welcome"
  }];
};
var Welcome = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col my-16 px-8 gap-16 max-w-full md:gap-8 md:flex-row md:max-w-6xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold my-10 leading-11 text-4xl md:text-6xl", children: "Congratulations! Your Account is Ready" }, void 0, false, {
      fileName: "app/routes/welcome.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/welcome.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 bg-white rounded-lg p-4 flex items-center justify-center flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl mt-4 font-bold text-center", children: "Thank you for joining the company!" }, void 0, false, {
        fileName: "app/routes/welcome.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-center", children: "You're ready to jump into an amazing finantial life journey with us." }, void 0, false, {
        fileName: "app/routes/welcome.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "mt-4", onClick: () => console.log("get started clicked"), "aria-label": "Get started button", children: "Get started" }, void 0, false, {
        fileName: "app/routes/welcome.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/welcome.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/welcome.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/welcome.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = Welcome;
var welcome_default = Welcome;
var _c;
$RefreshReg$(_c, "Welcome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  welcome_default as default,
  meta
};
//# sourceMappingURL=/build/routes/welcome-JOCSRU3Z.js.map
