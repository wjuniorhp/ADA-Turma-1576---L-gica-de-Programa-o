function rolarDados() {
    const numDados = Number(document.getElementById("numDados").value);
    const lados = Number(document.getElementById("lados").value);
    const divResultado = document.getElementById("resultado");

    divResultado.innerHTML = "";
    let somaTotal = 0;

    // Laço for clássico
    for (let i = 0; i < numDados; i++) {
        const sorteio = Math.floor(Math.random() * lados) + 1;
        somaTotal += sorteio;
        divResultado.innerHTML += `<span class='dado'>${sorteio}</span>`;
    }

    divResultado.innerHTML += `<h3>Soma Total: <b>${somaTotal}</b></h3>`;
}