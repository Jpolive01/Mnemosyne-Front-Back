console.log("Hello World");

var idade = 22;
var idade = "Vinte e Dois";
console.log(idade);

let nome = "João";
console.log(nome);

const cargo = "aluno";
console.log(cargo);

// Exercicio 3
const nome_ = "João"
let idade_ = "15" 

let mensagem = `Meu nome è ${nome_}, tenho ${idade_} anos`;

console.log(mensagem);


console.log(typeof nome_)
console.log(typeof idade_)

let maiordeIdade = true;
let temFilhos = false;

let tamanho
console.log(tamanho)

let vazio = null;
console.log(vazio);

// Exercìcio 3 - tipos primitivos
let a = 10;
let b = "João";
let c = "10";
let d = 20;

console.log("a + b", a + b);
console.log("a + c", a - c);
console.log("a + d", a + d);

let n1 = "42";
n1 = Number(n1);
console.log(n1);

console.log(parseFloat("40.12Ae"));
console.log(Number("40.12Ae"));

// Condicionais
let idade2 = 18;

if (idade2 < 18) {
    console.log("Menor de idade");
} else if (idade2 === 18) {
    console.log("Acabou de atingir a maioridade");
} else {
    console.log("Maior de idade");
}