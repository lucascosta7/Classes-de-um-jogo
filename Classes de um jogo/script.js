// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói (guerreiro, mago, monge, ninja)
    }

    // Método para o herói atacar
    atacar() {
        let ataque;

        // Definindo o tipo de ataque com base no tipo do herói
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "usou um ataque desconhecido"; // Caso o tipo não seja reconhecido
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Criando instâncias da classe Heroi
let heroi1 = new Heroi("Gandalf", 300, "mago");
let heroi2 = new Heroi("Aragorn", 87, "guerreiro");
let heroi3 = new Heroi("Kung Lao", 45, "monge");
let heroi4 = new Heroi("Shuriken", 30, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar(); // Saída: O mago atacou usando magia.
heroi2.atacar(); // Saída: O guerreiro atacou usando espada.
heroi3.atacar(); // Saída: O monge atacou usando artes marciais.
heroi4.atacar(); // Saída: O ninja atacou usando shuriken.
