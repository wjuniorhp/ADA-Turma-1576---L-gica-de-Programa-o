// 1. Criando um array vazio
const notas = [];

// 2. Preenchendo o array com notas obtidas via prompt
notas.push(Number(prompt('Digite a primeira nota:')));
notas.push(Number(prompt('Digite a segunda nota:')));
notas.push(Number(prompt('Digite a terceira nota:')));

console.log('Notas inseridas:', notas);

// 3. Calculando a média das 3 notas
const soma = notas[0] + notas[1] + notas[2];
const media = soma / notas.length;

// 4. Exibindo no html
const resultado = document.getElementById('resultado');
resultado.innerHTML = `
<p> Notas registradas: ${notas.join(', ')} </p>
<h3>A média final é <strong>${media.toFixed(2)}</strong></h3>
`;