interface I1{
    nombre: string;
    numb: number;
    bool: boolean;
    arr: string[];
    nulo?: string; 
}

const i:I1={
    nombre: "a",
    numb: 0,
    bool: false,
    arr: ['xd','asa'],
    nulo:'no xd'
}
console.table(i)
export {};