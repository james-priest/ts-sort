import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  //   data: number[];

  //   constructor(data: number[]) {
  //     this.data = data;
  //   }
  constructor(public data: number[]) {
    super();
  }

  // adding 'get' makes length become a property
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftData = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftData;
  }
}
