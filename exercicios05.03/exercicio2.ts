import readlineSync from "readline-sync";

let numeros: Set<number> = new Set<number>();

// entrada de dados
for (let i = 0; i < 10; i++) {
    let numero = readlineSync.questionInt("Digite um numero: ");
    numeros.add(numero);
}

// saída de dados
console.log("\nListar dados do Set:");

for (let num of numeros) {
    console.log(num);
}