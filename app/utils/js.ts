export const callAll = (...fns: any) => {
  return (...args: any) => {
    fns.forEach((fn: any) => fn && fn(...args));
  };
};
