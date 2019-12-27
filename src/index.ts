import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([12, 3, -5, 0, -10, 2]);
console.log('pre sort:', numbersCollection.data);
numbersCollection.sort();
console.log('post sort:', numbersCollection.data);

const charactersCollection = new CharactersCollection('James');
console.log('pre sort:', charactersCollection.data);
charactersCollection.sort();
console.log('post sort:', charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

console.log('-- pre sort --');
linkedList.print();
linkedList.sort();
console.log('-- post sort --');
linkedList.print();
