import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([12, 3, -5, 0, -10, 2]);
const sorter = new Sorter(numbersCollection);
console.log('pre sort:', numbersCollection.data);
sorter.sort();
console.log('post sort:', numbersCollection.data);

// const sorter2 = new Sorter("James");
// sorter2.sort();
// console.log(sorter2.collection);
