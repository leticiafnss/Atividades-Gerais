import { Queue } from "./Queue";

let fila = new Queue<string>();

console.log("**************************************");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("**************************************");


console.log("\nOpcao 1 - Adicionar Cliente");

fila.enqueue("João");

console.log("Fila:");
fila.printQueue();

console.log("Cliente Adicionado!");


console.log("\nOpcao 1 - Adicionar Cliente");

fila.enqueue("Maria");

console.log("Fila:");
fila.printQueue();

console.log("Cliente Adicionado!");


console.log("\nOpcao 1 - Adicionar Cliente");

fila.enqueue("Ana");

console.log("Fila:");
fila.printQueue();

console.log("Cliente Adicionado!");


console.log("\nOpcao 2 - Listar todos os Clientes");

fila.printQueue();


console.log("\nOpcao 3 - Retirar Cliente da Fila");

if (fila.isEmpty()) {
 console.log("A fila está vazia!");
} else {
 fila.dequeue();
 console.log("O Cliente foi Chamado!");
}

console.log("\nFila:");
fila.printQueue();


console.log("\nOpcao 0 - Sair");
console.log("Programa Finalizado!");