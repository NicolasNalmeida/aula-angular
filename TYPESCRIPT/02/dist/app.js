//FUNÇÕES
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat MF? " + (isEnoughToBeatMF(distance) ? 'Yes' : 'No'));
//ARROW FUNCTION
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
//PARÂMETROS PADRÕES EM TS
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 1) = " + inc(5, 1)); //passando valores em todos os parâmetros da função
console.log("inc(5) = " + inc(5)); //passando valores com apenas um parâmetro
