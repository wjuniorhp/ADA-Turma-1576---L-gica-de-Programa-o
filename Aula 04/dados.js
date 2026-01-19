function pegarDados() {
    let nome, idade;

    // Validação 1: Nome
    do {
        nome = prompt("Digite seu nome:");

        if (!nome || nome.length < 3) {
            alert("Nome inválido. Por favor, insira um nome com pelo menos 3 caracteres.");
        }
    } while (!nome || nome.length < 3);

    // Validação 2: Idade
    do {
        idade = Number(prompt("Digite sua idade:"));

        if (isNaN(idade)) {
            alert("Idade inválida. Por favor, insira um número válido para a idade.");
        }
        if (idade < 18) {
            alert("Você deve ser maior de 18 anos para continuar.");
        }
    } while (isNaN(idade) || idade < 18);

    dados = document.getElementById("dados");
    dados.style.display = "block";
    dados.innerHTML = `
    <h3> Cadastro realizado com sucesso! </h3>
    <p>Nome: <b>${nome}</b></p>
    <p>Idade: <b>${idade}</b></p>
    `;
}