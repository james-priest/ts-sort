/*
 typeof with primitives string, number, boolean, symbol
 instanceof with objects, Date, Array, etc. test against constructor func
*/

class Sorter {
  // collection: number[] | string;
  
  // constructor(collection: number[] | string) {
  //   this.collection = collection;
  // }
  constructor(public collection: number[] | string) {} // same as above

  sort(): void {
    const { length } = this.collection; // destructure
    let colArray: string[];

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // All of this only work if collection is number[]
        // If collection is an array of numbers
        if (this.collection instanceof Array) { // type guard
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only going to work if collection is a string
        // If collection is a string
        if (typeof this.collection === 'string') { // type guard
          colArray = this.collection.split('')
          if (colArray[j].toLocaleLowerCase() > colArray[j + 1].toLocaleLowerCase()) {
            const leftHand = colArray[j]
            colArray[j] = colArray[j + 1]
            colArray[j + 1] = leftHand
          }
          this.collection = colArray.join('')
        }
      }
    }
  }
}

const sorter1 = new Sorter([10, 3, -5, 0, -10, 2]);
sorter1.sort();
console.log(sorter1.collection);
const sorter2 = new Sorter('James');
sorter2.sort();
console.log(sorter2.collection);
