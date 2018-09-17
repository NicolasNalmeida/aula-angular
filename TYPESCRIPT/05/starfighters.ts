import{Spacecraft, Containership} from './base-ships';

export class MilleniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number;

    constructor() {
        super('hyperdrive');
        this.cargoContainers = 4;
    }

    jumpInToHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpInToHyperspace();
        }
        else {
            console.log('Failed to jump int hyperspace');

        }
    }
}