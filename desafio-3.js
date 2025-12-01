class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi("Helio", 27, "mago");
let heroi2 = new Heroi("Bruno", 30, "guerreiro");
let heroi3 = new Heroi("Kai", 40, "monge");
let heroi4 = new Heroi("Ryu", 25, "ninja");

heroi1.atacar(); 
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
