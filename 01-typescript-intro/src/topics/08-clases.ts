import { Person } from './08-clases';
export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public name: string,
        private address: string = 'No hay xd'
    ){
    }
}

/*export class Hero extends Person{
    constructor(
        name: string,
        address: string, 
        public poder: string,
        public alterEgo: string
    ){
        super(name,address)
    }
}*/
export class Hero{
    constructor(
        public person: Person,
        public poder: string,
        public alterEgo: string
    ){
    }
}
const c1 = new Person('Joffre');
const h1 = new Hero(c1,'Todos', 'Gofren');

console.log(h1);
console.log(c1.name);
console.log(c1.address);