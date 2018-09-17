"use strict";
exports.__esModule = true;
//CLASSES
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    } //criando um construtor e um atributo tipo String
    Spacecraft.prototype.jumpInToHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor); //logando uma mensagem com o valor da variável 'propulsor' passado no construtor
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
