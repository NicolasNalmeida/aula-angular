//FUNÇÕES
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat MF? " + (isEnoughToBeatMF(distance) ? 'Yes' : 'No'));
