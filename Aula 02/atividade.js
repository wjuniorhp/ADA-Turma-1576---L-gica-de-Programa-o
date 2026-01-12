function calcularMedia() {
    // 1. Criando um array vazio
    const notas = [];
    
    // 2. Preenchendo o array com notas obtidas no formulário
    notas.push(Number(document.getElementById('nota1').value));
    notas.push(Number(document.getElementById('nota2').value));
    notas.push(Number(document.getElementById('nota3').value));
    
    console.log('Notas inseridas:', notas);
    
    // 3. Calculando a média das 3 notas
    const soma = notas[0]*2 + notas[1]*3 + notas[2]*5;
    const media = soma / 10;
    
    // Criando a lista de notas
    let listahtml = '<ul>';
    for (let i = 0; i < notas.length; i++) {
        listahtml += `<li>Nota ${i + 1}: ${notas[i]}</li>`;
    }
    listahtml += '</ul>';

    // Destacando em verde se a media for maior que 6
    let destaque = `style="color: ${media>=6 ? 'green' : 'red'};"`;

    // 4. Exibindo no html
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p> Notas registradas:</p>
    ${listahtml}<br>
    <h3>A média final é <strong ${destaque}>${media.toFixed(2)}</strong></h3>
    `;
}