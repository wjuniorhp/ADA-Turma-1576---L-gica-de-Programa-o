// PASSO 2: Interface com o Usuário

function jogar() {
    const divResultado = document.getElementById("resultado");
    divResultado.style.display = "block";

    // Limpa o resultado anterior
    divResultado.className = "";
    divResultado.innerHTML = "Processando...";

    try {
        // 1. Coleta os dados da interface
        const qtdInput = Number(document.getElementById("qtd").value);
        const ladosInput = Number(document.getElementById("lados").value);

        // 2. Camada de lógica
        // Se a função rolarDados disparar um erro, o código pula para o catch

        const resultado = rolarDados(qtdInput, ladosInput);

        // 3. Sucesso! (só executa se não der erro acima)

        let htmlDados = "";
        if (resultado.dados.length <= 20) {
            htmlDados = resultado.dados
                .map((dado) => `<span class="dado-visual">${dado}</span>`)
                .join(" ");
        } else {
            htmlDados = `<small>Muitos dados jogados... (${resultado.dados.length})</small>`;
        }

        divResultado.classList.add("box-sucesso");
        divResultado.innerHTML = `
            <p>${htmlDados}</p>
            <h2><strong>Total: ${resultado.total}</strong></h2>
        `;

    } catch (erro) {
        // 4. Tratamento dos Erros
        console.error("Erro capturado:", erro); // Log para desenvolvedores

        divResultado.classList.add("box-erro");
        divResultado.innerHTML = `
            <strong>Ocorreu um erro:</strong><br>
            <span>${erro.message}</span>
        `;

    } finally {
        // Opcional. Código roda sempre, independente de sucesso ou erro.
        console.log("Tentativa de jogada finalizada.");
    }
}