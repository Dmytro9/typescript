const arrOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['Hello', 'Dima'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrOfNumbers);
reverse(arrayOfStrings);
