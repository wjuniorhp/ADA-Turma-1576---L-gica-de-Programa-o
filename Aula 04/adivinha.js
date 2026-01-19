function adivinhar() {
    // Passo 1: Sortear número entre 1 e 20
    const numeroSecreto = Math.floor(Math.random() * 20) + 1;

    let tentativa = 0;
    let chute = 0;

    // Passo 2: Loop até o usuário acertar ou esgotar tentativas
    while (chute !== numeroSecreto) {
        let entrada = prompt("Adivinha o número secreto entre 1 e 20 ou digite 'Sair'");

        if (entrada === null || entrada.toLowerCase() === 'sair') {
            alert(`Jogo encerrado. O número secreto era ${numeroSecreto}.`);
            return;
        }

        chute = Number(entrada);
        tentativa++;

        if (chute=== numeroSecreto) {
            alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativa} tentativas.`);
            mensagem = document.getElementById("mensagem");
            mensagem.style.display = "block";
            mensagem.innerHTML = `<p>🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativa} tentativas.<p>`;
        } else if (chute> numeroSecreto) {
            alert("MENOS! Tente um número menor.");
        } else if (chute< numeroSecreto) {
            alert("MAIS! Tente um número maior.");
        }
    }
}