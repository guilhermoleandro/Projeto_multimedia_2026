
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

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;

const quiz = document.getElementById("quiz");
const results = document.getElementById("results");

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const optionsContainer = document.getElementById("options");

const counter = document.getElementById("counter");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const nextButton = document.getElementById("next-button");
const feedback = document.getElementById("feedback");

const answeredInfo = document.getElementById("answered-info");

// Mostrar uma pergunta

function loadQuestion() {

    selectedAnswer = null;
    answered = false;

    const q = questions[currentQuestion];

    questionText.textContent = q.question;

    questionNumber.textContent =
        `PERGUNTA ${String(currentQuestion + 1).padStart(2, "0")}`;

    counter.textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    const progress = (currentQuestion / questions.length) * 100;

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;

    optionsContainer.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "feedback";

    answeredInfo.textContent = "0 respostas selecionadas";

    nextButton.disabled = true;

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Ver resultados →"
            : "Próxima pergunta →";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const label = document.createElement("span");
        label.textContent = option;

        button.appendChild(letter);
        button.appendChild(label);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);
    });
}

// Selecionar e corrigir resposta

function selectAnswer(index) {

    if (answered) return;

    selectedAnswer = index;
    answered = true;

    const q = questions[currentQuestion];

    const optionButtons =
        optionsContainer.querySelectorAll(".option");

    optionButtons.forEach((button, i) => {

        button.disabled = true;

        if (i === q.answer) {
            button.classList.add("correct");
        }

        if (i === selectedAnswer && selectedAnswer !== q.answer) {
            button.classList.add("wrong");
        }

        if (i === selectedAnswer) {
            button.classList.add("selected");
        }
    });

    if (selectedAnswer === q.answer) {

        score++;

        feedback.textContent =
            "✓ Resposta correta! " + q.explanation;

        feedback.classList.add("correct-text");

    } else {

        feedback.textContent =
            "✕ Resposta incorreta. " + q.explanation;

        feedback.classList.add("wrong-text");
    }

    answeredInfo.textContent = "Resposta registada";

    nextButton.disabled = false;
}

// Avançar no questionário

nextButton.addEventListener("click", () => {

    if (!answered) return;

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;
        loadQuestion();

    } else {

        showResults();
    }
});

// Apresentar resultados

function showResults() {

    quiz.classList.add("hidden");
    results.classList.remove("hidden");

    progressFill.style.width = "100%";
    progressText.textContent = "100%";

    const percentage =
        Math.round((score / questions.length) * 100);

    document.getElementById("final-score").textContent = score;

    document.getElementById("correct-count").textContent = score;

    document.getElementById("wrong-count").textContent =
        questions.length - score;

    document.getElementById("percentage").textContent =
        percentage + "%";

    let title;
    let description;
    let icon;

    if (percentage >= 90) {

        title = "Excelente trabalho!";
        description = "Demonstraste um excelente domínio dos conceitos de Multimédia. Continua assim!";
        icon = "🏆";

    } else if (percentage >= 70) {

        title = "Muito bom!";
        description = "Tens bons conhecimentos de Multimédia. Estás no bom caminho!";
        icon = "🌟";

    } else if (percentage >= 50) {

        title = "Bom esforço!";
        description = "Já tens algumas bases, mas ainda podes melhorar os teus conhecimentos.";
        icon = "📚";

    } else {

        title = "Continua a aprender!";
        description = "Não desistas! Aproveita para rever os conteúdos e tenta novamente.";
        icon = "💡";
    }

    document.getElementById("result-title").textContent = title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("result-icon").textContent = icon;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Recomeçar questionário

document.getElementById("restart-button").addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;

    results.classList.add("hidden");
    quiz.classList.remove("hidden");

    loadQuestion();

    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Iniciar aplicação

loadQuestion();
