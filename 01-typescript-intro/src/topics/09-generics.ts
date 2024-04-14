
export function wmt<T>(a: T):T{
    return a;
}

const a = wmt("Hola-mundo");
const b = wmt(1);
const c = wmt([2,5,4,1]);

console.log(a.split('-'));
console.log(b.toFixed());
console.log(c.join(' '));