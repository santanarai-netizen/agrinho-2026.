// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    // --- SISTEMA DE ACESSIBILIDADE ---
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentarTexto = document.getElementById("btn-aumentar");
    const btnDiminuirTexto = document.getElementById("btn-diminuir");
    let tamanhoFonte = 100; // Porcentagem inicial

    // Alternar Alto Contraste
    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");
        // Salva a preferência do usuário no navegador
        const trocou = document.body.classList.contains("alto-contraste");
        localStorage.setItem("altoContraste", trocou);
    });

    // Aumentar Fonte
    btnAumentarTexto.addEventListener("click", () => {
        if (tamanhoFonte < 140) { // Limite máximo para não quebrar o layout
            tamanhoFonte += 10;
            document.documentElement.style.fontSize = `${tamanhoFonte}%`;
        }
    });

    // Diminuir Fonte
    btnDiminuirTexto.addEventListener("click", () => {
        if (tamanhoFonte > 90) { // Limite mínimo
            tamanhoFonte -= 10;
            document.documentElement.style.fontSize = `${tamanhoFonte}%`;
        }
    });

    // Verificar se o usuário já usava alto contraste antes
    if (localStorage.getItem("altoContraste") === "true") {
        document.body.classList.add("alto-contraste");
    }

    // --- INTERATIVIDADE DO QUIZ ---
    const btnQuiz = document.getElementById("btn-quiz");
    const resultadoQuiz = document.getElementById("resultado-quiz");

    if (btnQuiz) {
        btnQuiz.addEventListener("click", () => {
            const resposta = document.querySelector('input[name="sustentavel"]:checked');
            
            if (!resposta) {
                resultadoQuiz.innerHTML = "<p style='color: red;'>Por favor, selecione uma opção!</p>";
                return;
            }

            if (resposta.value === "correto") {
                resultadoQuiz.innerHTML = "<p style='color: #2e7d32; font-weight: bold;'>🎉 Correto! O equilíbrio une tecnologia, preservação de florestas e rotação de culturas.</p>";
            } else {
                resultadoQuiz.innerHTML = "<p style='color: #c62828; font-weight: bold;'>❌ Ops! Lembre-se que o foco é o equilíbrio. Tente novamente!</p>";
            }
        });
    }
});
