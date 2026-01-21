function tabuada() {
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
    const divTabuada = document.getElementById("tabuada");
    divTabuada.innerHTML = `<h3>Tabuada do ${numero}:</h3>`;

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        divTabuada.innerHTML += `<p>${numero} x ${i} = <b>${resultado}</b></p>`;
    }
}

function listarConvidados() {
    let convidados = ["Ana", "Bia", "Carlos", "Daniel", "Edu"];
    const divConvidados = document.getElementById("convidados");
    texto = "<h3>Lista de Convidados:</h3><ul>";


    for (let convidado of convidados) {
        if (convidado === "Carlos") {
            alert("Carlos é o penetra! Você não é bem-vindo aqui, Carlos."); 
        } else {
            texto += `<li>${convidado}</li>`;
            alert(`Bem-vindo(a), ${convidado}!`);
        }
    }
    divConvidados.innerHTML = texto + "</ul>";
}

function inspecionarCarro() {
    let carro = {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2002,
        cor: "Branco"
    };
    const divCarro = document.getElementById("carro");
    divCarro.innerHTML = "<h3>Inspeção do Carro:</h3>";

    for (let propriedade in carro) {
        divCarro.innerHTML += `<p>${propriedade}: <b>${carro[propriedade]}</b></p>`;
        console.log(`${propriedade}: ${carro[propriedade]}`);
    }
    
}