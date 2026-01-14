// Passo 1: Criar uma lista vazia
const agenda = [];

function salvarContato() {
    // Passo 2: Pegar valores do html
    let nome = document.getElementById('inputNome').value;
    let email = document.getElementById('inputEmail').value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return; // Sai da função se algum campo estiver vazio
    }

    // Passo 3: Criar um objeto com os valores
    let contato = {
        nome: nome,
        email: email,
        id: Date.now() // Gera um ID único baseado no timestamp atual (opcional, mas boa prática)
    };

    // Passo 4: Adicionar o objeto ao array
    agenda.push(contato);
    console.log("Agenda atualizada:", agenda);

    // Passo 5: Limpar inputs e atualizar a lista na tela
    document.getElementById('inputNome').value = "";
    document.getElementById('inputEmail').value = "";
    renderizarAgenda();
}

function renderizarAgenda() {
    let lista = document.getElementById('lista-contatos');
    lista.innerHTML = "";   // Limpar o HTML para nao duplicar os contatos

    // loop para percorrer o array de objetos
    for (let i = 0; i < agenda.length; i++) {
        let p = agenda[i];  // Objeto da vez
        lista.innerHTML += `
        <li>
            <strong>${p.nome}</strong>
            <strong>${p.email}</strong>
        </li>
        `;
    }
}
