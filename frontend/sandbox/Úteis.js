//const numeros2 = [1, 2, 3, 4, 5, 6]

//const numerosmaioresque2 = numeros2.filter(numero => numero > 2)

//Exercicios Filter
//Básico
//Exercício 1

//const numeros = [1, 8, 16, 45, 79, 90, 100];
//const maioresQueDez = numeros.filter(numero => numero > 10);
//console.log(maioresQueDez); 

//Exercício 2
//const nomes = ["Arthur", "Ariel", "Amanda", "Carlos", "Bianca", "Bruna"];
//const nomesComA = nomes.filter(nome => nome.startsWith("A"));
//console.log(nomesComA);

//Intermediário
//Exercício 1
const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  const produtosBaratos = produtos.filter(produto => produto.preco < 50);
  console.log(produtosBaratos);
  
//Exercícios de Find
//Exercício 1
//const nomes = ["Carlos", "Bianca", "Almada", "Arthur", "Beatriz"];
//const almada = nomes.find(nome => nome == "Almada");
//console.log(almada);

//Exercício 2
// const Usuarios = [
//     { id: 1, nome: "Alice" },
//     { id: 2, nome: "Beatriz" },
//     { id: 3, nome: "Ariel" }
//   ];
  
//   const usuarioEncontrado = Usuarios.find(usuario => usuario.id == 3);
  
//   console.log(usuarioEncontrado); 

