//CLASSES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    } //criando um construtor e um atributo tipo String
    Spacecraft.prototype.jumpInToHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor); //logando uma mensagem com o valor da variável 'propulsor' passado no construtor
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive'); // instanciando a classe Spacecraft passando um valor por parâmetro atribundo esse valor ao construtor
ship.jumpInToHyperspace(); //executando o método
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MilleniumFalcon.prototype.jumpInToHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpInToHyperspace.call(this);
        }
        else {
            console.log('Failed to jump int hyperspace');
        }
    };
    return MilleniumFalcon;
}(Spacecraft));
var falcon = new MilleniumFalcon();
falcon.jumpInToHyperspace();
var goodForTheJob = function (nave) { return nave.cargoContainers > 2; };
console.log("Is Falcon good for the Job? " + (goodForTheJob(falcon) ? 'Yes' : 'No'));
