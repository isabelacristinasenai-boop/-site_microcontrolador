document.addEventListener("DOMContentLoaded", function () {
    const nextButtons = document.querySelectorAll(".next-btn");
    
    // Lógica para passar as perguntas do Quiz passo a passo
    nextButtons.forEach(button => {
        button.addEventListener("click", function () {
            const currentQuestion = this.parentElement;
            const step = parseInt(currentQuestion.getAttribute("data-step"));
            
            // Valida se o aluno escolheu uma opção antes de passar
            const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');
            if (!selectedOption) {
                alert("Por favor, selecione uma opção antes de continuar.");
                return;
            }
            
            currentQuestion.classList.remove("active");
            const nextQuestion = document.querySelector(`[data-step="${step + 1}"]`);
            if (nextQuestion) {
                nextQuestion.classList.add("active");
            }
        });
    });

    // Lógica ao clicar em Enviar o Quiz
    const submitBtn = document.getElementById("submit-quiz");
    if (submitBtn) {
        submitBtn.addEventListener("click", function () {
            const currentQuestion = this.parentElement;
            const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');
            if (!selectedOption) {
                alert("Por favor, selecione uma opção para finalizar.");
                return;
            }

            calcularResultado();
        });
    }
});

function calcularResultado() {
    const formData = new FormData(document.getElementById("quizForm"));
    let resultado = "";
    let justificativa = "";

    // Captura os valores selecionados
    const answers = {};
    for (let [key, value] of formData.entries()) {
        answers[key] = value;
    }

    // Algoritmo de decisão simplificado baseado nas respostas
    if (answers.q3 === "ia" || answers.q2 === "alta") {
        resultado = "ESP32-S3";
        justificativa = "Seu projeto exige Inteligência Artificial, processamento de sinais ou Machine Learning na ponta. O ESP32-S3 conta com aceleração de hardware para instruções de IA, tornando-o perfeito para isso.";
    } else if (answers.q2 === "zigbee" || answers.q1 === "sim") {
        resultado = "ESP32-C6";
        justificativa = "Para projetos que exigem excelente imunidade a ruídos ou integração nativa com ecossistemas de automação moderna (como redes Mesh, Zigbee 3.0, Thread e Wi-Fi 6), o ESP32-C6 é a escolha ideal e supereficiente.";
    } else if (answers.q3 === "sim_ihm" || answers.q5 === "muito") {
        resultado = "ESP32-P4";
        justificativa = "Como seu foco envolve alto poder de processamento bruto, displays avançados e sem a dependência de conexões sem fio nativas, o potente ESP32-P4 (Dual-Core de alta performance com suporte a IOs robustos) atenderá perfeitamente.";
    } else {
        resultado = "ESP32 Dev Module (Clássico / NodeMCU)";
        justificativa = "Para tarefas comuns de automação residencial, leitura de sensores gerais e acionamento via Wi-Fi/Bluetooth tradicional com ótimo custo-benefício, o módulo de desenvolvimento clássico do ESP32 resolve com folga.";
    }

    // Exibe o resultado na tela
    document.getElementById("texto-resultado").innerText = resultado;
    document.getElementById("justificativa-resultado").innerText = justificativa;
    document.getElementById("resultado").style.display = "block";
    
    // Rola a página suavemente até o resultado
    document.getElementById("resultado").scrollIntoView({ behavior: 'smooth' });
}