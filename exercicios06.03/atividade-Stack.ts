import { Stack } from "./Stack";

let pilha = new Stack<string>();

console.log("**************************************");
console.log("1 - Adicionar Livro na Pilha");
console.log("2 - Listar todos os Livros");
console.log("3 - Retirar Livro da Pilha");
console.log("0 - Sair");
console.log("**************************************");


console.log("\nOpcao 1 - Adicionar Livro");

pilha.push("O Auto da Compadecida");

console.log("Pilha:");
pilha.printStack();

console.log("Livro adicionado!");


console.log("\nOpcao 1 - Adicionar Livro");

pilha.push("O Alquimista");

console.log("Pilha:");
pilha.printStack();

console.log("Livro adicionado!");


console.log("\nOpcao 1 - Adicionar Livro");

pilha.push("Um Estudo em Vermelho");

console.log("Pilha:");
pilha.printStack();

console.log("Livro adicionado!");


console.log("\nOpcao 2 - Listar todos os Livros");

console.log("Lista de Livros na Pilha:");
pilha.printStack();


console.log("\nOpcao 3 - Retirar Livro da Pilha");

if (pilha.isEmpty()) {
 console.log("A Pilha está vazia!");
} else {

 pilha.pop();

 console.log("Um Livro foi retirado da pilha!");
}

console.log("\nPilha:");
pilha.printStack();


console.log("\nOpcao 0 - Sair");
console.log("Programa Finalizado!");
