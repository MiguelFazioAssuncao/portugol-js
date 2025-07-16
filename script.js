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

function cadastrarPassageiro() {
  if (totalPassageiros < 10) {
    const nome = prompt("Digite o nome do passageiro:");
    const documento = prompt("Digite o documento do passageiro:");
    const peso = prompt("Digite o peso da bagagem:");
    const tipo = prompt("Digite o tipo da bagagem (mão, despachada):");

    const passageiro = new Passageiro(nome, documento);
    const bagagem = new Bagagem(peso, tipo);

    verificarBagagem(bagagem);

    passageiros.push(passageiro);
    bagagens.push(bagagem);
    totalPassageiros++;

    console.log("Passageiro cadastrado com sucesso.");
  } else {
    console.log("Limite de passageiros atingido!");
  }
}

function consultarVoosDisponiveis() {
    voos.forEach((voo, i) => {
      console.log(`Voo ${voo.numero} | Destino: ${voo.destino} | Horário: ${voo.horario}`);
    });
  }
  