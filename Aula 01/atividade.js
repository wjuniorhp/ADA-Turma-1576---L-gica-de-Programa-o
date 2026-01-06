// Passo 1: Entrada de dados
let nome = prompt('Digite o nome do aluno:');
let nota1 = prompt('Digite a primeira nota:');
let nota2 = prompt('Digite a segunda nota:');

// Passo 2: Conversão de string para number
nota1 = Number(nota1);
nota2 = Number(nota2);

// Passo 3: Cálculo da média
let media = (nota1*4 + nota2*6) / 10;

// Passo 4: Saída de dados
alert("Olá " + nome + ", sua média ponderada é: " + media);