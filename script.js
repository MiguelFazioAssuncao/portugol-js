class Passageiro {
    constructor(nome, documento, statusEmbarque, bagagemRegistrada) {
        this.nome = nome;
        this.documento = documento;
        this.statusEmbarque = statusEmbarque;
        this.bagagemRegistrada = bagagemRegistrada;
    }
}

class Voo {
    constructor(numero, destino, horario, capacidade, quantidadeEmbarcados) {
        this.numero = numero;
        this.destino = destino;
        this.horario = horario;
        this.capacidade = capacidade;
        this.quantidadeEmbarcados = quantidadeEmbarcados;
    }
}

class Bagagem {
    constructor(peso, tipo, autorizada) {
        this.peso = peso;
        this.tipo = tipo;
        this.autorizada = autorizada;
    }
}

let passageiros = [];
let bagagens = [];
let voos = [];
let totalPassageiros = 0;
