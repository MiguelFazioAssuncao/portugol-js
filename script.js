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
    console.log(
      `Voo ${voo.numero} | Destino: ${voo.destino} | Horário: ${voo.horario}`
    );
  });
}

function verificarBagagem(bagagem) {
  bagagem.autorizada = bagagem.peso <= 23.0;
}

function realizarEmbarque() {
  const doc = prompt("Digite o documento do passageiro para embarque:");
  let encontrou = false;

  for (let i = 0; i < passageiros.length; i++) {
    if (passageiros[i].documento === doc) {
      encontrou = true;
      consultarVoosDisponiveis();
      const vooEscolhido = prompt("Escolha o número do voo:");

      for (let j = 0; j < voos.length; j++) {
        if (
          voos[j].numero === vooEscolhido &&
          voos[j].quantidadeEmbarcados < voos[j].capacidade
        ) {
          passageiros[i].statusEmbarque = true;
          voos[j].quantidadeEmbarcados++;
          alert("Passageiro embarcado com sucesso.");
          return;
        }
      }
      alert("Voo não encontrado ou lotado.");
    }
  }

  if (!encontrou) {
    alert("Passageiro não encontrado.");
  }
}

function emitirBilhete() {
  passageiros.forEach((p, i) => {
    console.log("----------------------------");
    console.log("Passageiro: " + p.nome);
    console.log("Documento: " + p.documento);
    console.log("Status Embarque: " + (p.statusEmbarque ? "Sim" : "Não"));
    console.log(
      "Bagagem Autorizada: " + (bagagens[i].autorizada ? "Sim" : "Não")
    );
  });
}

function encerrarSistema() {
  alert("Encerrando sistema...");
}

voos.push(new Voo("101", "São Paulo", "08:00", 5));
voos.push(new Voo("202", "Rio de Janeiro", "10:30", 5));
voos.push(new Voo("303", "Brasília", "13:15", 5));

function menuPrincipal() {
  let opcao;
  do {
    opcao = parseInt(
      prompt(
        "\n===== MENU PRINCIPAL =====\n" +
          "1 - Cadastrar Passageiro\n" +
          "2 - Consultar Voos\n" +
          "3 - Realizar Embarque\n" +
          "4 - Emitir Bilhete\n" +
          "5 - Encerrar Sistema\n" +
          "Escolha uma opção:"
      )
    );

    switch (opcao) {
      case 1:
        cadastrarPassageiro();
        break;
      case 2:
        consultarVoosDisponiveis();
        break;
      case 3:
        realizarEmbarque();
        break;
      case 4:
        emitirBilhete();
        break;
      case 5:
        encerrarSistema();
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== 5);
}
