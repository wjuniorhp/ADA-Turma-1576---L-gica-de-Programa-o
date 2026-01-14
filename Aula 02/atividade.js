function calcularMedia() {
    // 1. Criando um array vazio
    const notas = [];
    
    // 2. Preenchendo o array com notas obtidas no formulário
    const nomeDoAluno = document.getElementById('nome').value;
    notas.push(Number(document.getElementById('nota1').value));
    notas.push(Number(document.getElementById('nota2').value));
    notas.push(Number(document.getElementById('nota3').value));
    
    console.log('Notas inseridas:', notas);
    
    // 3. Calculando a média das 3 notas
    const soma = notas[0]*2 + notas[1]*3 + notas[2]*5;
    const media = soma / 10;
    
    // Criando a lista de notas
    let listahtml = '<ul class="lista-notas">';
    for (let i = 0; i < notas.length; i++) {
        listahtml += `<li>Nota ${i + 1}: <b>${notas[i].toFixed(1)}</b></li>`;
    }
    listahtml += '</ul>';

    // Destacando em verde se a media for maior que 6
    let destaque = `style="color: ${media>=6 ? 'green' : 'red'};"`;

    // 4. Exibindo no html
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <h2>Aluno: <b>${nomeDoAluno}</b></h2>
    <p> Notas registradas:</p>
    ${listahtml}
    <h3>A média final é <strong ${destaque}>${media.toFixed(2)}</strong></h3>
    `;
}