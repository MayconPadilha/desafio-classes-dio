let heroi = {
    nome: "",
    idade: 0,
    personagem: "",
    vida: 0,
    ataque: ''
  }

let chanceVitoria = 0.7
let chanceVitoriaBoss = 0.2

function IniciarJogo(){
    document.getElementById("telaInicio").style.display = "none";
    document.getElementById("telaJogo").style.display = "block";

    heroi.nome = document.getElementById("name").value; //nome
    heroi.idade = document.getElementById("idade").value; //idade
    heroi.personagem = document.getElementById("personagem").value; // personagem
    heroi.vida = 100

    switch (heroi.personagem) {
        case "guerreiro":
            heroi.ataque = 'espada'
          break;
        case "mago":
            heroi.ataque = 'magia'
          break;
        case "monge":
            heroi.ataque = 'artes marciais'
          break;
        case "ninja":
            heroi.ataque = 'shuriken'
          break;
        default:
          alert("Escolha um personagem válido.");
      }
    
    exibirVida();

    let apresentacao = document.getElementById("apresentacao");
    apresentacao.innerHTML = `<p>Seja Bem-vindo Herói ${heroi[0]}</p>`
}

function exibirDados(){

    let exibicao = document.getElementById("telaResultado")
    let exibicaoAtaque = document.getElementById("telaAtaque")
    exibicaoAtaque.innerHTML = `<p></p>`

    exibicao.innerHTML = `<p>
    Informacoes do Heroi
    <br>Nome: ${heroi.nome}
    <br>Idade: ${heroi.idade}
    <br>Personagem: ${heroi.personagem}
    <br>Vida: ${heroi.vida}
    <br>Tipo de Ataque: ${heroi.ataque}
    </p>`
}

function batalha(){

    let exibicao = document.getElementById("telaResultado")
    let exibicaoAtaque = document.getElementById("telaAtaque")

    exibicaoAtaque.innerHTML = `<p>o ${heroi.personagem} atacou usando ${heroi.ataque}</p>`

    const sorteio = Math.random(); // Gera um número aleatório entre 0 e 1
    
    if (sorteio < chanceVitoria) {
        // Vitória
        heroi.vida += 35;

        exibirVida();

        exibicao.innerHTML = `<p>Voce venceu a batalha e ganhou ${35} de vida!</p>`

    } else {
        // Derrota
        let vidaPerdida = Math.floor(Math.random() * 15) + 10;

        heroi.vida -= vidaPerdida;

        exibirVida();

        exibicao.innerHTML = `<p>Voce perdeu a batalha e perdeu ${vidaPerdida} de vida!</p>`
        
    }

    
}

function desafiarBoss() {

    let exibicao = document.getElementById("telaResultado");
    let exibicaoAtaque = document.getElementById("telaAtaque")

    exibicaoAtaque.innerHTML = `<p>o ${heroi.personagem} atacou usando ${heroi.ataque}</p>`

    const sorteio = Math.random(); // Gera um número aleatório entre 0 e 1

    if (sorteio < chanceVitoriaBoss) {
        // Vitória
        heroi.vida += 300;

        exibirVida();

        exibicao.innerHTML = `<p> Você ganhou desse Boss fraquinho!! Ganhou ${300} de vida!`;

    } else {
        // Derrota
        let vidaPerdida = Math.floor(Math.random() * 41) + 60;

        heroi.vida -= vidaPerdida;

        exibirVida();

        exibicao.innerHTML = `<p>Voce perdeu a batalha contra o Boss e perdeu ${vidaPerdida} de vida!</p>`;
    }
}

function exibirVida() {
    let exibirVida = document.getElementById("exibirVida");
    exibirVida.innerHTML = `<p>Voce tem ${heroi.vida} de vida!</p>`;
}

function InformacoesPopup() {
    window.open("info.html", "_blank");
}