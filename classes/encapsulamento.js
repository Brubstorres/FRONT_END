export class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
        return data.getFullYear() - this.ano;
    }
}

let variavel = true;

const meuCarro = new Carro("Opala", 1972);

console.log(meuCarro.nome);
console.log("A idade so meu carro é " + meuCarro.idade() + " anos.")