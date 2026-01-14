// Passo 1: Criando o Map
const meuDicionario = new Map();

// Passo 2: Popular com dados iniciais
meuDicionario.set("js", "Uma linguagem de programação versátil usada principalmente para desenvolvimento web.");
meuDicionario.set("html", "A linguagem padrão para criar páginas web.");
meuDicionario.set("css", "Uma linguagem usada para descrever a apresentação de documentos HTML.");

console.log("Dicionário inicial:", meuDicionario);

function cadastrarDefinicao() {
    let chave = document.getElementById("chaveNova").value.toLowerCase().trim();
    let valor = document.getElementById("valorNovo").value.trim();

    if (chave && valor) {
        // .set() adiciona ou atualiza o valor para a chave especificada
        meuDicionario.set(chave, valor);
        alert(`Palavra "${chave}" salva com sucesso!`);

        // Limpar os campos após o cadastro
        document.getElementById("chaveNova").value = "";
        document.getElementById("valorNovo").value = "";
    } else {
        alert("Por favor, preencha ambos os campos.");
    }
}

function pesquisarTermo() {
    let busca = document.getElementById("termoBusca").value.toLowerCase().trim();
    let box = document.getElementById("resultadoDicionario");

    box.style.display = "block"; // Exibir a caixa de resultado

    // Passo 3: Verificar se a chave existe com o has()
    if (meuDicionario.has(busca)) {
        // Passo 4: Recuperar o valor com o get()
        let definicao = meuDicionario.get(busca);
        box.innerHTML = `✅ <strong>${busca}:</strong><br> ${definicao}`;
        box.style.backgroundColor = "#ffeaa7"; // Cor de fundo para sucesso
    } else {
        box.innerHTML = `❌ A palavra "<strong>${busca}</strong>" não foi encontrada no dicionário.`;
        box.style.backgroundColor = "#fab1a0"; // Cor de fundo para erro
    }
}