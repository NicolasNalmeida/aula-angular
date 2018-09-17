//FUNÇÕES
let isEnoughToBeatMF = function(parsecs: number): boolean{
    return parsecs < 12;
}

let distance: number = 14;

console.log(`Is ${distance} parsecs enough to beat MF? ${isEnoughToBeatMF(distance) ? 'Yes': 'No'}`);

//ARROW FUNCTION
let call = (name: string) => console.log(`Do you copy, ${name}`);
call('R2');

//PARÂMETROS PADRÕES EM TS

function inc(speed:number, inc: number = 1): number{
    return speed + inc;
}

console.log(`inc(5, 1) = ${inc(5, 1)}`); //passando valores em todos os parâmetros da função
console.log(`inc(5) = ${inc(5)}`); //passando valores com apenas um parâmetro
