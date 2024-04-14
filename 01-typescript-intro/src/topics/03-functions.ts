/*
function add(a: number, b:number): number{
    return a + b;
}
const addArrow = (a: number, b: number):string => {
    return `${a + b}`;
}
function mult (a: number, b?: number, c: number = 2) {
    return a * c;
}

let r = add(1,2);
let r1 = addArrow(3,4);
let a = mult(2);
console.log({r,r1,a})
*/
interface Charac{
    name: string;
    hp: number;
    show: () => void;
}
const heal = (charac:Charac, amount: number) =>{
    charac.hp += amount
}

const asd: Charac = {
    name: "aa",
    hp: 50,
    show(){
        console.log(`Hp: ${this.hp}`)
    }
}

heal(asd, 20);
heal(asd,10);

asd.show();
export {};