//CLASSES

class Spacecraft{ //Classe criada
    constructor(public propulsor: string){} //criando um construtor e um atributo tipo String

    jumpInToHyperspace(){ //criando método
        console.log(`Entering hyperspace with ${this.propulsor}`); //logando uma mensagem com o valor da variável 'propulsor' passado no construtor
    }
}

let ship = new Spacecraft('hyperdrive'); // instanciando a classe Spacecraft passando um valor por parâmetro atribundo esse valor ao construtor
ship.jumpInToHyperspace(); //executando o método

class MilleniumFalcon extends Spacecraft{
    constructor(){
        super('hyperdrive');
    }

    jumpInToHyperspace(){
        if(Math.random() >= 0.5)
        {
            super.jumpInToHyperspace();
        }
        else
        {
            console.log('Failed to jump int hyperspace');
            
        }
    }
}

let falcon = new MilleniumFalcon();

falcon.jumpInToHyperspace();