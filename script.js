const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua comida favorita?",
        alternativas: [
            {
                texto: "Pizza",
                afirmacao: "Você adora a versatilidade e os sabores variados da pizza."
            },
            {
                texto: "Sushi",
                afirmacao: "Aprecia a delicadeza e a frescura dos ingredientes no sushi."
            },
            {
                texto: "Churrasco",
                afirmacao: "Gosta da socialização e dos sabores intensos do churrasco."
            },
            {
                texto: "Massa",
                afirmacao: "Admira a simplicidade e a abundância de opções na comida italiana."
            }
        ]
    },
    {
        enunciado: "Qual atividade você prefere fazer no seu tempo livre?",
        alternativas: [
            {
                texto: "Ler um bom livro",
                afirmacao: "Ama mergulhar em histórias e se transportar para outros mundos através da leitura."
            },
            {
                texto: "Praticar esportes",
                afirmacao: "Gosta da adrenalina e do desafio físico dos esportes."
            },
            {
                texto: "Assistir filmes e séries",
                afirmacao: "Aprecia o entretenimento visual e as histórias cativantes do cinema e das séries."
            },
            {
                texto: "Cozinhar ou experimentar novas receitas",
                afirmacao: "Desfruta da criatividade e do prazer de criar pratos deliciosos na cozinha."
            }
        ]
    },
    {
        enunciado: "Como você prefere passar suas férias ideais?",
        alternativas: [
            {
                texto: "Explorar novos países e culturas",
                afirmacao: "Ama descobrir novos lugares, culturas e experimentar novas aventuras pelo mundo."
            },
            {
                texto: "Relaxar em um resort all-inclusive",
                afirmacao: "Prefere relaxar e desfrutar de comodidades sem se preocupar com nada."
            },
            {
                texto: "Ficar em casa e aproveitar o tempo livre",
                afirmacao: "Aprecia o conforto do lar e utiliza o tempo para descansar e recarregar as energias."
            },
            {
                texto: "Explorar a natureza em acampamentos",
                afirmacao: "Gosta de estar ao ar livre, em contato com a natureza e longe da agitação da cidade."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    limparAlternativas();
    mostrarAlternativas(perguntaAtual.alternativas);
}

function mostrarAlternativas(alternativas) {
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Aqui está mais sobre você:";
    textoResultado.textContent = historiaFinal;
    limparAlternativas();
}

function limparAlternativas() {
    while (caixaAlternativas.firstChild) {
        caixaAlternativas.removeChild(caixaAlternativas.firstChild);
    }
}

mostraPergunta();
