import {Spacecraft, Containership} from './base-ships';
import { MilleniumFalcon } from './starfighters';

import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 40, "="));


let ship = new Spacecraft('hyperdrive'); // instanciando a classe Spacecraft passando um valor por parâmetro atribundo esse valor ao construtor
ship.jumpInToHyperspace(); //executando o método

let falcon = new MilleniumFalcon();

falcon.jumpInToHyperspace();


let goodForTheJob = (nave: Containership) => nave.cargoContainers > 2;
console.log(`Is Falcon good for the Job? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`);