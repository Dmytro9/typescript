// Boolean
const isFetching: boolean = false;

// Number
const int: number = 42;
const float: number = 4.2;

// String
const message: string = 'Hello ...';

// Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 8, 13];

const stringArray: string[] = ['Hello', 'World'];
const stringArray2: Array<string> = ['Hello', 'World'];

// Tuple
const contact: [string, number] = ['Dima', 1234567];

// Any
let variable: any = 42;
variable = 'new string';

// Function
function sayName(name: string): void {
  console.log(name);
}

// Never
function throwError(message: string): never {
  throw new Error();
}

function infinite(): never {
  while (true) {
    console.log('never');
  }
}

// Type (create own types, alias)
type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;
