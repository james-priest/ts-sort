import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([12, 3, -5, 0, -10, 2]);
const numSorter = new Sorter(numbersCollection);
console.log('pre sort:', numbersCollection.data);
numSorter.sort();
console.log('post sort:', numbersCollection.data);

const charactersCollection = new CharactersCollection('James');
const strSorter = new Sorter(charactersCollection);
console.log('pre sort:', charactersCollection.data);
strSorter.sort();
console.log('post sort:', charactersCollection.data);
