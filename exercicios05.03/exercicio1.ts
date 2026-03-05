import readlineSync from "readline-sync";

let cores: string[] = []

// entrada de dados
for(let i = 0; i < 5; i++){
 let cor = readlineSync.question("Digite uma cor: ")
 cores.push(cor)
}

// saída das cores digitadas
console.log("\nListar todas as cores:")

for(let cor of cores){
 console.log(cor)
}

// ordenar cores
cores.sort()

console.log("\nOrdenar as cores:")

for(let cor of cores){
 console.log(cor)
}

