//CLASSES
class Spacecraft { //Classe criada
    constructor(public propulsor: string) { } //criando um construtor e um atributo tipo String

    jumpInToHyperspace() { //criando método
        console.log(`Entering hyperspace with ${this.propulsor}`); //logando uma mensagem com o valor da variável 'propulsor' passado no construtor
    }
}

//INTERFARCE
interface Containership {
    cargoContainers: number;
}

export {Spacecraft, Containership};