// PARTE 1: Lógica do Negócio

//  Função auxiliar
function gerarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Função principal
function rolarDados(quantidade, lados) {
    if (quantidade <= 0) {
        throw new Error("Você precisa rolar pelo menos um dado.");
    }

    if (lados < 2) {
        throw new Error("Um dado precisa ter pelo menos 2 lados.");
    }

    if (quantidade > 100) {
        throw new Error("Calma lá! O limite é de 100 dados.");
    }

    // Processamento (se passou pelas regras acima, o código continua seguro)

    let somaTotal = 0;
    let listaResultados = [];

    for (let i = 0; i < quantidade; i++) {
        const resultado = gerarNumeroAleatorio(lados);
        listaResultados.push(resultado);
        somaTotal += resultado; // Acumulador
    }

    return {
        total: somaTotal,
        dados: listaResultados
    };
}