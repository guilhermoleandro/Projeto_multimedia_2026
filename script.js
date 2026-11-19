
// ==========================================
// QUESTIONÁRIO MULTIMÉDIA
// ==========================================

// Lista de perguntas
const questions = [
    {
        question: "O que significa o conceito de Multimédia?",
        options: [
            "Utilização exclusiva de texto digital",
            "Combinação de diferentes tipos de conteúdos digitais",
            "Criação exclusiva de imagens",
            "Utilização apenas de som e vídeo"
        ],
        answer: 1,
        explanation: "A Multimédia combina diferentes elementos, como texto, imagem, áudio, vídeo e animação."
    },
    {
        question: "Qual destes formatos é normalmente utilizado para imagens com transparência?",
        options: [
            "JPEG",
            "MP3",
            "PNG",
            "WAV"
        ],
        answer: 2,
        explanation: "O formato PNG suporta transparência através do canal alfa."
    },
    {
        question: "O que representa a resolução de uma imagem digital?",
        options: [
            "A quantidade de píxeis que a compõem",
            "O tamanho do ficheiro em megabytes",
            "A duração da imagem",
            "O número de cores do monitor"
        ],
        answer: 0,
        explanation: "A resolução representa a quantidade de píxeis de uma imagem, normalmente indicada pela sua largura e altura."
    },
    {
        question: "Qual é a principal característica do formato JPEG?",
        options: [
            "Suporta exclusivamente animações",
            "É utilizado para ficheiros de áudio",
            "Não permite compressão",
            "Utiliza compressão com perda de informação"
        ],
        answer: 3,
        explanation: "O JPEG utiliza compressão com perda de informação, reduzindo o tamanho dos ficheiros de imagem."
    },
    {
        question: "Qual destes programas é utilizado para edição de vídeo?",
        options: [
            "Adobe Premiere Pro",
            "Microsoft Excel",
            "Notepad",
            "Windows Calculator"
        ],
        answer: 0,
        explanation: "O Adobe Premiere Pro é um software de edição e montagem de vídeo."
    },
    {
        question: "O que é um píxel?",
        options: [
            "Um tipo de ficheiro de áudio",
            "A menor unidade de uma imagem digital rasterizada",
            "Um programa de edição",
            "Uma técnica de compressão de vídeo"
        ],
        answer: 1,
        explanation: "Um píxel é a menor unidade individual de uma imagem digital rasterizada."
    },
    {
        question: "Qual é a função de um codec?",
        options: [
            "Aumentar o brilho de uma imagem",
            "Criar apresentações de diapositivos",
            "Codificar e descodificar dados multimédia",
            "Alterar a resolução de um monitor"
        ],
        answer: 2,
        explanation: "Um codec permite codificar e descodificar conteúdos digitais, como áudio e vídeo."
    },
    {
        question: "Qual destes formatos é utilizado para ficheiros de áudio?",
        options: [
            "SVG",
            "MP3",
            "PNG",
            "HTML"
        ],
        answer: 1,
        explanation: "MP3 é um formato de áudio digital que utiliza compressão com perda."
    },
    {
        question: "O que caracteriza uma imagem vetorial?",
        options: [
            "É constituída exclusivamente por píxeis",
            "Não pode ser redimensionada",
            "Só pode ser utilizada em fotografias",
            "É construída através de formas e equações matemáticas"
        ],
        answer: 3,
        explanation: "As imagens vetoriais são definidas através de elementos geométricos e fórmulas matemáticas, permitindo redimensionamento sem perda de qualidade."
    },
    {
        question: "Qual é a principal finalidade da animação digital?",
        options: [
            "Criar a ilusão de movimento através de imagens sucessivas",
            "Reduzir o tamanho de documentos de texto",
            "Aumentar a resolução de fotografias",
            "Converter ficheiros de áudio em texto"
        ],
        answer: 0,
        explanation: "A animação cria a sensação de movimento através da apresentação sequencial de imagens ou estados visuais."
    },
    {
        question: "O que significa FPS na produção de vídeo?",
        options: [
            "File Processing System",
            "Final Picture Size",
            "Frames Per Second",
            "Format Pixel Standard"
        ],
        answer: 2,
        explanation: "FPS significa Frames Per Second, ou seja, o número de fotogramas apresentados por segundo."
    },
    {
        question: "Qual é a função principal do HTML numa aplicação web?",
        options: [
            "Editar ficheiros de áudio",
            "Definir a estrutura e o conteúdo da página",
            "Criar automaticamente animações 3D",
            "Comprimir imagens digitais"
        ],
        answer: 1,
        explanation: "HTML é uma linguagem de marcação utilizada para estruturar os elementos e conteúdos de uma página web."
    }
];


// ==========================================
// VARIÁVEIS DO QUESTIONÁRIO
// ==========================================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;


// ==========================================
// ELEMENTOS HTML
// ==========================================

const quizIntro = document.getElementById("quiz-intro");
const quizContent = document.getElementById("quiz-content");
const quizResults = document.getElementById("quiz-results");

const startButton = document.getElementById("start-quiz");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-quiz");

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const questionCounter = document.getElementById("question-counter");

const optionsContainer = document.getElementById("options");

const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const feedback = document.getElementById("feedback");
