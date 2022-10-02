let age: number = 50;
let name1: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};
// --------------------------------------------------------------------
let anything: any = -20;
anything = "Text";
anything = {};
// --------------------------------------------------------------------
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}
// --------------------------------------------------------------------
