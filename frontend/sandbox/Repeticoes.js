//for(let contador = 1; contador <= 5; contador ++) {

//    console.log("Contagem: ", contador);

//}

//FOR////////////////////////////////////
function exerciciosRep0 () {   
    for (let i = 1; i <= 5; i++) {
    console.log(`Contagem: ${i}`);
    }
}    
//WHILE
//let contador = 1;
//while ( contador <= 5) {

//    console.log("Contagem :", contador);
//    contador++;
//}
//DO WHILE

//let contador = 1
//do {

//    console.log("Contador: ", contador);

//} while (false);

//Exercícios de Repeticoes
//Exercício 1
function exercicioRep1 () {
    for (let contador = 1; contador <=10; contador ++) {

    console.log("Contagem: ", contador);
    }

    let divdelogs = document.querySelector(".logs")
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = "Exercicio 1 de repetição executado"
    divdelogs.appendChild(paragrafo)
}

//Exercício 2
function exerciciosRep2 () {
let num = prompt("Insira um número")
    for (let contador = 1; contador <= 10; contador++) {

    let valorcalculado = num * contador

    let mensagem = `${num} x ${contador} = ${valorcalculado}`
    console.log(mensagem)
    }
}

//Exercício 3
//let num = prompt("Insira um número")
//num = Number(num)
//for (let contador = 1; contador <= num; contador++) {
//    let valor = num + contador
//    let mensagem = `${num} + ${contador} = ${valor}`
//    console.log(mensagem)
//}

//Intermediário
//Exercício 1
//let contador = 0;

//while (contador <= 50) {
//    console.log(contador)
//    contador += 2;
//}
//Exercício 2
//let numeroAleatorio = Math.floor(Math.random() * 100);

//let chute = null;

//while (chute != numeroAleatorio) {

//    chute = parseInt(prompt("Chute um número:"));

//    if (chute != numeroAleatorio) {

//        if (chute > numeroAleatorio) {
    
//            alert("Chutou alto.");
    
//        } else {
    
//            alert("Chutou baixo.");
    
//        }

//    }

//}

//alert("Você acertou!");

//Exercício 3
//let num1 = prompt("Insira Um Número")
//num1 = Number(num1)

//while (num1 >= 0) {
// console.log("contador", num1) 
// num1--
//}