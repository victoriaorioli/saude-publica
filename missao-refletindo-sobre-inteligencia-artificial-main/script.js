const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nos dias de hoje, no Brasil, Saúde Pública é o nome dado às práticas e medidas de responsabilidade do Estado para garantir que todo cidadão tenha acesso à saúde física, mental e social. Essas ações são também olhadas de perto e, muitas vezes, coordenadas pela OMS (Organização Mundial da Saúde)",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Qual o principal objetivo da saúde pública? "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "é um direito de todos e visa ao pleno desenvolvimento humano por meio do processo de ensino-aprendizagem."
            }
        ]
    },
    {
        enunciado: "Saúde Pública: prática social de natureza interdisciplinar, enquanto ação coletiva tanto do Estado como da sociedade civil, destinada a proteger e melhorar a saúde das pessoas. Caracterizam-se por tarefas de condução, regulação, modulação do financiamento, vigilância do acesso e harmonização da provisão",
        alternativas: [
            {
                texto: "Como está a saúde pública atualmente no Brasil?.",
                afirmacao: "A saúde no Brasil tem avanços históricos como a descentralização, a municipalização de ações e serviços, a melhoria e a ampliação da atenção à saúde"
            },
            {
                texto: "A Constituição brasileira de 1988 diz que a saúde é direito de todos e dever do Estado.",
                afirmacao: "A saúde no Brasil tem avanços históricos como a descentralização, a municipalização de ações e serviços, a melhoria e a ampliação da atenção à saúde, o fomento à vigilância em saúde e sanitária e o controle social com a atuação dos conselhos de saúde"
            }
        ]
    },
    {
        enunciado: "Como está a saúde pública atualmente no Brasil?",
        alternativas: [
            {
                texto: "O sistema de atendimento funciona de modo descentralizado e hierarquizado..",
                afirmacao: "Outro problema de saúde que que deve ser analisado com cautela é a obesidade, que cresce a níveis alarmantes."
            },
            {
                texto: "O sistema de atendimento funciona de modo descentralizado e hierarquizado.",
                afirmacao: "Outro problema de saúde que que deve ser analisado com cautela é a obesidade, que cresce a níveis alarmantes."
            }
        ]
    },
    {
        enunciado: "Quais são os 4 pilares do SUS?",
        alternativas: [
            {
                texto: "Todo cidadão tem direito à saúde e acesso a todos os serviços públicos de saúde. Além disso, o governo tem o dever de prover assistência à saúde igualitária para todos.",
                afirmacao: "Descentralização,Regionalização,Hierarquização,Participação social."
            },
            {
                texto: "Como é o sistema de saúde no Brasil.",
                afirmacao: "O Sistema Único de Saúde (SUS) é composto pelo Ministério da Saúde, Estados e Municípios, conforme determina a Constituição Federal."
            }
        ]
    },
    {
        enunciado: "Qual a importância da saúde pública no Brasil?",
        alternativas: [
            {
                texto: "O SUS representa uma conquista da sociedade brasileira porque promove a justiça social, com atendimento a todos os indivíduos.",
                afirmacao: "Além disso, é o maior sistema público de saúde do mundo, atendendo a cerca de 190 milhões de pessoas, sendo que 80% delas dependem exclusivamente do sistema para tratar da saúde."
            },
            {
                texto: "é um sistema de saúde público, gratuito e universal oferecido no Brasil..",
                afirmacao: "PO SUS também atende estrangeiros que estejam residindo ou de passagem no Brasil sem qualquer cobrança de tarifas. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
