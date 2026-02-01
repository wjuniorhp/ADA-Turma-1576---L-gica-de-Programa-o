const saldoInicial = 1500;
let cliente = {
    nome: "Wellington",
    saldo: saldoInicial,
};

let transacoes = [];

function exibirNome(usuario) {
    nomeElemento = document.getElementById("nome-usuario");
    nomeElemento.innerHTML = usuario.nome;
}

function exibirSaldo(usuario) {
    saldoElemento = document.getElementById("saldo");
    saldoElemento.innerHTML = usuario.saldo.toFixed(2).replace(".", ",");
}

function atualizarSaldo() {
    let transacao = transacoes[transacoes.length - 1]; 
    if (transacao.tipo === "deposito") {
        cliente.saldo += transacao.valor;
    } else if (transacao.tipo === "pagamento") {
        cliente.saldo -= transacao.valor;
    }
    
}

function novaTransacao(tipo) {
    try {
        let valor = Number(prompt(`Digite o valor para ${tipo}:`).replace(",", "."));
        if (isNaN(valor) || valor <= 0) {
            throw new Error("Valor inválido. Tente novamente.");
        } else if (valor > cliente.saldo && tipo === "pagamento") {
            throw new Error("Saldo insuficiente para pagamento.");
        }
        
        let descricao = prompt("Digite uma descrição para a transação:");
        transacoes.push({ tipo: tipo, valor: valor, descricao: descricao, data: new Date() });
        atualizarSaldo();
    } catch (error) {
        alert(error.message);
    } finally {
        exibirSaldo(cliente);
        renderizarExtrato();
    }
}

function renderizarExtrato() {
    let extratoElemento = document.getElementById("lista-transacoes");
    extratoElemento.innerHTML = "";
    let filtro = document.getElementById("filtro-tipo").value;

    const dict = {"deposito": "entrada", "pagamento": "saida"};

    for (let transacao of transacoes) {
        let linha = `
            <tr style="color: ${transacao.tipo === "deposito" ? "green" : "red"}">
                <td>${transacao.data.toLocaleDateString()}</td>
                <td>${transacao.descricao}</td>
                <td>${transacao.tipo === "deposito" ? "+" : "-"} R$ ${transacao.valor.toFixed(2).replace(".", ",")}</td>
            </tr>
        `
        if (filtro === "todos" || filtro === dict[transacao.tipo]) {
            extratoElemento.innerHTML += linha;
        }
    }
}

function filtrarExtrato() {
    renderizarExtrato();
}

exibirSaldo(cliente);
exibirNome(cliente);
renderizarExtrato();