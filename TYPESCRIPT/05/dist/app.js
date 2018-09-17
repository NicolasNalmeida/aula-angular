"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive'); // instanciando a classe Spacecraft passando um valor por parâmetro atribundo esse valor ao construtor
ship.jumpInToHyperspace(); //executando o método
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpInToHyperspace();
var goodForTheJob = function (nave) { return nave.cargoContainers > 2; };
console.log("Is Falcon good for the Job? " + (goodForTheJob(falcon) ? 'Yes' : 'No'));
