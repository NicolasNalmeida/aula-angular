//FUNÇÕES
let isEnoughToBeatMF = function(parsecs: number): boolean{
    return parsecs < 12;
}

let distance: number = 14;

console.log(`Is ${distance} parsecs enough to beat MF? ${isEnoughToBeatMF(distance) ? 'Yes': 'No'}`);
