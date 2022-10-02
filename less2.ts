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

let person1: [string, number];
person1 = ["text", 1];
// --------------------------------------------------------------------

enum loadingStatus {
  LOADING,
  READY,
}

const person2 = {
  status: loadingStatus.READY,
};

if (person2.status === loadingStatus.READY) {
  console.log("Role: ", loadingStatus.READY);
}

// --------------------------------------------------------------------

const a: string | number = 5;
// --------------------------------------------------------------------
let literal: "enable" | "disable";
literal = "disable";
// --------------------------------------------------------------------
function showMessage(message): void {
  console.log(message);
}

function calc(num1, num2): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
// --------------------------------------------------------------------
type pageData = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: pageData = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: pageData = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
