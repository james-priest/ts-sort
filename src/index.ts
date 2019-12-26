import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

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

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const llSorter = new Sorter(linkedList);
console.log('-- pre sort --');
linkedList.print();
llSorter.sort();
console.log('-- post sort --');
linkedList.print();
