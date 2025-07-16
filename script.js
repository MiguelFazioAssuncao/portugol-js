class Passageiro {
    constructor(nome, documento) {
      this.nome = nome;
      this.documento = documento;
      this.statusEmbarque = false;
      this.bagagemRegistrada = false;
    }
  }
  
  class Voo {
    constructor(numero, destino, horario, capacidade) {
      this.numero = numero;
      this.destino = destino;
      this.horario = horario;
      this.capacidade = capacidade;
      this.quantidadeEmbarcados = 0;
    }
  }
  
  class Bagagem {
    constructor(peso, tipo) {
      this.peso = peso;
      this.tipo = tipo;
      this.autorizada = false;
    }
  }

let passageiros = [];
let bagagens = [];
let voos = [];
let totalPassageiros = 0;

